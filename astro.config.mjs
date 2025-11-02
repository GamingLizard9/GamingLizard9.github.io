// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: 'https://gaminglizard9.github.io',
    image: {
        service: passthroughImageService(),
    },
});
