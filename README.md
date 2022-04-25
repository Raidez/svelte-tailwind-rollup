# Svelte with TailwindCSS

This is a template for use [Svelte](https://svelte.dev/) with [TailwindCSS](https://tailwindcss.com/), using [Rollup](https://rollupjs.org) as a bundler.

## Get started

1. download the template or use the command `npx degit svelte-tailwind-rollup/template svelte-app`
2. go to the directory
3. rename the application, search all _svelte-tailwind-rollup_ reference (index.html, package.json)
4. execute `npm install` to install dependencies
5. use `npm run dev` to start a livereload server on [localhost:10001](http://localhost:10001) (by default)
6. welcome to the Svelte community, good luck 😘.

## More informations

Rollup is a bundler, it take all files in _src/_ folder and compile it to the _public/_ folder and serve it through _localhost:8080_.
It use the file rollup.config.js to make all it's works, feel free to adjust as you want.

All files inside _public/_ are statics, put your images and another statics ressources here.

You can run the command `npm run build`, to minify all rollup output, it's the purpose for production.
