import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";

const inputMermaidFile = process.argv[2]
const outputMermaidFile = 'docs/architecture/erd.svg'
if (!inputMermaidFile) {
    console.error("SYNTAX_ERROR: Missing input mermaid file")
    process.exit(1)
}

mkdirSync("docs/architecture", {recursive: true})

try {
    execFileSync(
        'npx',
        ['mmdc', '-i', inputMermaidFile, '-o', outputMermaidFile],
        { stdio: 'pipe', encoding: 'utf-8' }
    );

console.log('SUCCESS');
process.exit(0);
} catch (error) {
 console.error('SYNTAX_ERROR:', error.stderr?.toString() || error.message);
 process.exit(1);
}

