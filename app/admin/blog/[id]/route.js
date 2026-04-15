// app/api/blog/[id]/route.js
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
  await connectDB();
  const { id } = params;
  const data = await req.json();

  try {
    const updated = await Blog.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 400 });
  }
}

export async function GET(req, { params }) {
  await connectDB();
  const blog = await Blog.findById(params.id);
  return NextResponse.json(blog);
}