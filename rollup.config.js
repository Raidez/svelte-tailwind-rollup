import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-css-only";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
	input: "src/main.js",
	output: {
		file: "public/bundle.js",
		format: "iife",
		name: "app",
		sourcemap: production,
	},
	plugins: [
		// compile svelte with tailwindcss as preprocess (including autoprefixer)
		svelte({
			preprocess: sveltePreprocess({
				sourceMap: !production,
				postcss: {
					plugins: [tailwindcss(), autoprefixer()],
				},
			}),
		}),

		// resolve external dependencies from NPM
		resolve({
			browser: true,
			dedupe: ["svelte"],
		}),
		commonjs(),

		// export CSS in separate file for better performance
		css({ output: "bundle.css" }),

		// start a local livereload server on public/ folder
		!production && serve("public/"),
		!production && livereload("public/"),

		// minify bundles in production mode
		production && terser(),
	],
};
