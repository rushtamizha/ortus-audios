// components/admin/MasterEditor.jsx
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Underline as UnderIcon,
  List,
  ListOrdered,
  Quote,
  Image as ImageIcon,
  Link as LinkIcon,
  Undo,
  Redo,
  Heading1,
  Heading2,
  Code,
  Minus,
  Italic,
} from "lucide-react";

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  const addImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      );

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await res.json();
      if (data.secure_url)
        editor.chain().focus().setImage({ src: data.secure_url }).run();
    };
    input.click();
  };

  const setLink = () => {
    const url = window.prompt("Enter URL");
    if (url)
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
  };

  const ToolbarBtn = ({ action, icon, active, title }) => (
    <button
      title={title}
      onClick={(e) => {
        e.preventDefault();
        action();
      }}
      className={`p-2 rounded-lg transition-all ${editor.isActive(active) ? "bg-[#8B0000] text-white" : "text-white/40 hover:bg-white/10 hover:text-white"}`}
    >
      {icon}
    </button>
  );

  return (
    <div className="flex flex-wrap gap-1 mb-4 p-2 border-b border-white/10 bg-white/5 sticky top-0 z-10 backdrop-blur-md">
      <ToolbarBtn
        action={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        active="heading"
        icon={<Heading1 size={18} />}
        title="H1"
      />
      <ToolbarBtn
        action={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        active="heading"
        icon={<Heading2 size={18} />}
        title="H2"
      />
      <div className="w-px h-6 bg-white/10 mx-1 align-middle self-center" />
      <ToolbarBtn
        action={() => editor.chain().focus().toggleBold().run()}
        active="bold"
        icon={<Bold size={18} />}
        title="Bold"
      />
      <ToolbarBtn
        action={() => editor.chain().focus().toggle().run()}
        active=""
        icon={<Italic size={18} />}
        title=""
      />
      <ToolbarBtn
        action={() => editor.chain().focus().toggleUnderline().run()}
        active="underline"
        icon={<UnderIcon size={18} />}
        title="Underline"
      />
      <div className="w-px h-6 bg-white/10 mx-1 self-center" />
      <ToolbarBtn
        action={() => editor.chain().focus().toggleBulletList().run()}
        active="bulletList"
        icon={<List size={18} />}
        title="Bullet List"
      />
      <ToolbarBtn
        action={() => editor.chain().focus().toggleOrderedList().run()}
        active="orderedList"
        icon={<ListOrdered size={18} />}
        title="Numbered List"
      />
      <ToolbarBtn
        action={() => editor.chain().focus().toggleBlockquote().run()}
        active="blockquote"
        icon={<Quote size={18} />}
        title="Quote"
      />
      <div className="w-px h-6 bg-white/10 mx-1 self-center" />
      <button
        onClick={setLink}
        className={`p-2 hidden rounded-lg transition-all ${editor.isActive("link") ? "text-[#8B0000]" : "text-white/40 hover:text-white"}`}
      >
        <LinkIcon size={18} />
      </button>
      <button onClick={addImage} className="p-2 text-white/40 hover:text-white">
        <ImageIcon size={18} />
      </button>
      <ToolbarBtn
        action={() => editor.chain().focus().toggleCode().run()}
        active="code"
        icon={<Code size={18} />}
        title="Inline Code"
      />
      <ToolbarBtn
        action={() => editor.chain().focus().setHorizontalRule().run()}
        icon={<Minus size={18} />}
        title="Divider"
      />
      <div className="flex ml-auto gap-1">
        <button
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2 text-white/20 hover:text-white"
        >
          <Undo size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2 text-white/20 hover:text-white"
        >
          <Redo size={18} />
        </button>
      </div>
    </div>
  );
};

export default function MasterEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-[#8B0000] underline cursor-pointer" },
      }),
      Image.configure({
        HTMLAttributes: {
          class:
            "rounded-2xl border border-white/10 my-8 shadow-2xl mx-auto block",
        },
      }),
      Placeholder.configure({
        placeholder: "Start crafting your high-end audio review...",
      }),
    ],
    content: content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none focus:outline-none min-h-[500px] px-8 py-6 text-white/80 leading-relaxed",
      },
    },
  });

  return (
    <div className="w-full bg-[#050508] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
