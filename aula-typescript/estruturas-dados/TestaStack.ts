import { Stack } from "./Stack.ts";

const pilha = new Stack<string>();

pilha.push("prato1");
pilha.push('prato2');
pilha.push("prato3");
pilha.push('prato4');

console.log('pilha de prato');
pilha.printStack();

console.log(`\nprato removido: ${pilha.pop()}`);
pilha.printStack();

console.log(`\nprato rno topo: ${pilha.peek()}`);

console.log(`\nprato removido: ${pilha.contains('prato3')}`);