import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Edit() {
	const ALLOWED_BLOCKS = ["goodmotion/gm-block-img-txt"];
	return (
		<div {...useBlockProps()}>
			<InnerBlocks allowedBlocks={{ ALLOWED_BLOCKS }} />
		</div>
	);
}
