import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";


function useRichTextEditor() {

    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [convertedContent, setConvertedContent] = useState(null);

    useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
    }, [editorState]);

    console.log(convertedContent);
  
  const MyRichTextEditor = () =>{
     return <div>


          <div className="border min-h-[400px]">
              <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  editorClassName="px-6"
              />
          </div>
      </div>
  }
  return (
    [
        MyRichTextEditor,
        convertedContent,


    ]
  )
}

export default useRichTextEditor