import React, { useState } from 'react';
import './App.css';
import { marked } from 'marked';


function App() {
  // State to store the markdown text
  const [markdown, setMarkdown] = useState('');

  // Function to handle markdown changes
  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  // Function to render markdown as HTML
  const getMarkdownText = () => {
    var rawMarkup = marked(markdown, { sanitize: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="App">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter markdown here..."
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
}

export default App;
