
import React, { useRef, useEffect } from 'react';
import { Bold, Italic, List, AlignLeft, Link as LinkIcon, Type } from 'lucide-react';

interface SimpleEditorProps {
  value: string;
  onChange: (val: string) => void;
}

const SimpleEditor: React.FC<SimpleEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const execCommand = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  // Initialize content
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, []); // Only on mount to avoid cursor jumping, simplified for this demo

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-2 border-b border-gray-100 bg-gray-50">
        <button type="button" onClick={() => execCommand('bold')} className="p-2 hover:bg-gray-200 rounded text-gray-600" title="Bold">
          <Bold size={16} />
        </button>
        <button type="button" onClick={() => execCommand('italic')} className="p-2 hover:bg-gray-200 rounded text-gray-600" title="Italic">
          <Italic size={16} />
        </button>
        <div className="w-px h-4 bg-gray-300 mx-1"></div>
        <button type="button" onClick={() => execCommand('formatBlock', 'H2')} className="p-2 hover:bg-gray-200 rounded text-gray-600 font-bold" title="Heading">
          <Type size={16} />
        </button>
        <button type="button" onClick={() => execCommand('insertUnorderedList')} className="p-2 hover:bg-gray-200 rounded text-gray-600" title="List">
          <List size={16} />
        </button>
        <div className="w-px h-4 bg-gray-300 mx-1"></div>
        <button type="button" onClick={() => {
            const url = prompt('Enter URL:');
            if(url) execCommand('createLink', url);
        }} className="p-2 hover:bg-gray-200 rounded text-gray-600" title="Link">
          <LinkIcon size={16} />
        </button>
      </div>
      
      {/* Editor Area */}
      <div 
        ref={editorRef}
        className="p-4 min-h-[200px] focus:outline-none prose max-w-none text-sm"
        contentEditable
        onInput={handleInput}
      ></div>
      
      <style>{`
        .prose h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; color: #111; }
        .prose ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
        .prose p { margin-bottom: 0.75rem; line-height: 1.6; }
        .prose a { color: #00D655; text-decoration: underline; }
        .prose b { font-weight: 700; }
      `}</style>
    </div>
  );
};

export default SimpleEditor;
