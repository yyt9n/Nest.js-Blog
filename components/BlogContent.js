import BlockContent from '@sanity/block-content-to-react';
import HightlightCode from './HightlightCode';
import {urlFor} from 'lib/api';

const serializers = {
    types: {
        code: ({node: {language, code, filename}}) => {
            return (
                <HightlightCode language={language}>
                    {code}
                    <div className="code-filename">{filename}</div>
                </HightlightCode>
            )
        },
        image: ({node: {asset, alt}}) => {
            return (
                <div className="blog-image">
                    <img src={urlFor(asset).height(300).fit('max').url()} />
                    <div className="image-alt">{alt}</div>
                </div>
            )
        },
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