import livingBase from "../livingBase";

export default function player({ name, health }) {
	return { ...livingBase, name, health }
}