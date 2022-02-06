const filename = process.env.npm_config_filename;

if (!filename) {
    const noFileErrorMessage =
        `
        There is not filename.
        recommended command:

        npm start --filename=\${filename}

        To exit, press Crtl+C type, and try again.
        `;

    throw new Error(noFileErrorMessage);
}

try {
    require(`./src/${filename}.js`);
} catch (error) {
    console.error(error);
}