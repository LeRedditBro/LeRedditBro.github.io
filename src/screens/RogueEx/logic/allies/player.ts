import livingBase from "../livingBase";

export default function player({ name, health }) {
	const base = livingBase();
	return { ...base, name, health }
}