import BlockContent from '@sanity/block-content-to-react';
import HightlightCode from './HightlightCode';

const serializers = {
    types: {
        code: ({node: {language, code, filename}}) => {
            return (
                <HightlightCode language={language}>
                    {code}
                    <div className="code-filename">{filename}</div>
                </HightlightCode>
            )
        }
    }
}

const BlogContent = ({content}) => {
    return (
        <BlockContent
            imageOptions={{w: 320, h:240, fit: 'max'}}
            serializers={serializers}
            blocks={content}
        />
    );
}

export default BlogContent;