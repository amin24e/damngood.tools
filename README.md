
# How to Install (for Newbies like Me)

Follow these steps to install the project:

1. **Clone the Repository**: Use the `git clone` command followed by the repository's URL to clone the repository to your local machine.

2. **Navigate to the Project Directory**: Once the repository is cloned, navigate to its directory using the `cd` command in your terminal.

3. **Install the Dependencies**: Depending on whether the project uses npm or yarn, use one of the following commands to install the dependencies:
   - If npm is being used: Run `npm install`.
   - If yarn is being used: Run `yarn`.

4. **Copy and Configure the `.env` File**: The project requires an `.env` file with specific environment variables. Follow these steps:
   - Copy the `.env.template` file to `.env`.
   - Open the `.env` file and add the required tokens/keys. 
     - For the following services, visit the provided URLs and obtain the necessary tokens/keys:
       - [app.screenshotone.com](https://app.screenshotone.com/access)
       - [geturldata.com](https://geturldata.com/dashboard/access)
       - [platform.openai.com](https://platform.openai.com/account/api-keys)
       - [platform.openai.com](https://platform.openai.com/account/org-settings)
       - [console.upstash.com](https://console.upstash.com/)
     - For Upstash Redis, perform the following:
       - Create a database in the Upstash console.
       - Once the database is created, go to REST API and obtain the `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`.
     - Finally, set the [`GPT4ALL_MODEL`](https://gpt4all.io/index.html) environment variable to `gpt4all-13b-snoozy` from the provided source.
5.Compile TypeScript: Run npx tsc to compile the TypeScript files into JavaScript. This command will use the settings specified in tsconfig.json. You may need to install TypeScript globally on your machine using npm install -g typescript if it's not already installed

6. **Build the Project**: Execute the build command for the project. The specific command may vary depending on the project's setup. For a typical Next.js project, run `npm run build` in the terminal. This command will build your project, preparing it for a production environment.

6. **Start the Server**: After the project is built, start the server using the command `npm run start` in the terminal. This command will launch your Next.js application. Open your web browser and navigate to `localhost:3000` (or the specified port) to access your application.

**Note: I encountered two errors when installing this on my server:**

1. **Error when Compiling TypeScript with 'npx tsc' (from the root directory)**:
   - Error message: `error TS2307: Cannot find module '@/types/nav' or its corresponding type declarations.`
   - Solution: To fix this error, add `@/types/*` in the `tsconfig.json` file under the `"paths"` section:
     ```json
     "paths": {
         "@/*": ["src/*"],
         "@/types/*": ["types/*"]
     }
     ```

2. **Error when running `npm run build`**:
   - Error message: 
     ```
     > next-template@0.0.2 build
     > next build
     
     info  - Loaded env from /root/damngood.tools/.env
     error - Failed to load next.config.mjs, see more info here https://nextjs.org/docs/messages/next-config-error
     
     > Build error occurred
     ReferenceError: require is not defined in ES module scope, you can use import instead
         at file:///root/damngood.tools/next.config.mjs:2:14
         ...
     ```
   - Solution: The error message indicates an issue with the `next.config.mjs` file. It specifically mentions that the use of `require` is not valid in an ES module. You need to update the `next.config.mjs` file and replace any `require` statements with `import` statements.

   - Update your `next.config.mjs` file, replacing any `require` statements with `import` statements according to the ES module syntax.

Make sure to apply these changes to resolve the errors you encountered during installation.




# Original read me 
Available tools: 

* [Privacy policy generation](https://damngood.tools/tools/privacy-policy-generator);
* [Font detection](https://damngood.tools/tools/detect-fonts);
* [Chat with any PDF](https://damngood.tools/tools/chat-pdf);
* [Summarize any URL](https://damngood.tools/tools/summarize-any-url);
* [Screenshots](https://damngood.tools/tools/screenshots-for-dimensions);
* [Spellcheck and grammar fixing](https://damngood.tools/tools/grammar-fixer);

And [many more](https://damngood.tools/).

A screenshot of an example tool—["Chat with any PDF"](https://damngood.tools/tools/chat-pdf): 

![Chat with any PDF](chat_with_any_pdf.jpg)







# DamnGood.Tools

A set of damn good tools built for fun, to play with Next.js and to catch up with the latest AI technologies. 

Available tools: 

* [Privacy policy generation](https://damngood.tools/tools/privacy-policy-generator);
* [Font detection](https://damngood.tools/tools/detect-fonts);
* [Chat with any PDF](https://damngood.tools/tools/chat-pdf);
* [Summarize any URL](https://damngood.tools/tools/summarize-any-url);
* [Screenshots](https://damngood.tools/tools/screenshots-for-dimensions);
* [Spellcheck and grammar fixing](https://damngood.tools/tools/grammar-fixer);

And [many more](https://damngood.tools/).

A screenshot of an example tool—["Chat with any PDF"](https://damngood.tools/tools/chat-pdf): 

![Chat with any PDF](chat_with_any_pdf.jpg)

## Stack 

The goal of this project for me is to have fun and explore my creativity. Expect to see a lot of technologies used in this one little lovely repository: 

* [Next.js](https://nextjs.org/) — the React framework for the web. 
* [TypeScript](https://www.typescriptlang.org/) as the main language of the project.
* [OpenAI APIs](https://platform.openai.com/docs/api-reference) for AI-based tools.
* [ScreenshotOne](https://screenshotone.com/) for rendering website screenshots.
* [GetURLData](https://geturldata.com/) for extracting website fonts and metadata.
* [shadcn/ui](https://ui.shadcn.com/) is a beautifully designed component library.

## License

Licensed under the [AGPL-3.0 license](./LICENSE).

Feel free to copy parts of the code and use them to improve your projects. Attribution or backlinks are much appreciated, especially to the [DamnGood.Tools](https://damngood.tools/).

But please, don't use this code to compete directly with the tools. 
