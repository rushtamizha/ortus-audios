import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  await connectDB();

  // FIX: Unwrapping params before accessing 'id'
  const { id } = await params; 

  try {
    const blog = await Blog.findById(id);
    if (!blog) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }
}

export async function PUT(req, { params }) {
  await connectDB();
  
  // FIX: Unwrapping params here too
  const { id } = await params; 
  const data = await req.json();

  try {
    const updated = await Blog.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 400 });
  }
}

export async function DELETE(req, { params }) {
  await connectDB();

  // FIX: Unwrapping params here as well
  const { id } = await params;

  try {
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 400 });
  }
}