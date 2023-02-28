import DOMPurify from 'dompurify';
import React from 'react';

const CreateMarkUp = (html) => {

            return {
                __html: DOMPurify.sanitize(html)
            }
        
};

export default CreateMarkUp;