import { converter } from "./Conversor.ts";

try {
    const resultado = converter(123);
} catch (error) {
    if (error  instanceof TypeError) {
        console.error(`TypeError: ${error.message}`);
    } else {
        console.error(`Outro error: ${error}`);
    }
} finally {
    console.log(`o try-catch capturou o erro!`)
}