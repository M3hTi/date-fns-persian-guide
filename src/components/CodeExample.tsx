
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeExampleProps {
  title: string;
  description: string;
  code: string;
  result?: string;
}

const CodeExample = ({ title, description, code, result }: CodeExampleProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden mb-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      
      <div className="relative">
        <div className="bg-gray-900 text-gray-100 p-6 overflow-x-auto">
          <button
            onClick={handleCopy}
            className="absolute top-4 left-4 p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
            title="کپی کردن کد"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </button>
          <pre className="text-sm leading-relaxed mt-8">
            <code>{code}</code>
          </pre>
        </div>
        
        {result && (
          <div className="bg-green-50 border-t border-green-200 px-6 py-4">
            <div className="text-sm text-green-800">
              <strong>نتیجه:</strong> <code className="bg-green-100 px-2 py-1 rounded text-green-900">{result}</code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeExample;
