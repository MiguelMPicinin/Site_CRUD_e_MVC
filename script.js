// Lista para armazenar usuários (simulando um banco de dados)
let usuarios = [];

// CREATE - Criar um novo usuário
function criarUsuario(nome, email) {
    const usuario = { id: usuarios.length + 1, nome, email };
    usuarios.push(usuario);
    return usuario;
}

// READ - Listar todos os usuários
function listarUsuarios() {
    return usuarios;
}

// UPDATE - Atualizar um usuário pelo ID
function atualizarUsuario(id, nome, email) {
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) return "Usuário não encontrado";
    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;
    return usuario;
}

// DELETE - Remover um usuário pelo ID
function deletarUsuario(id) {
    usuarios = usuarios.filter(u => u.id !== id);
    return "Usuário deletado com sucesso";
}

// Testando o CRUD
console.log(criarUsuario("João", "joao@email.com"));
console.log(criarUsuario("Maria", "maria@email.com"));

console.log("\nLista de usuários:", listarUsuarios());

console.log("\nAtualizando usuário:", atualizarUsuario(1, "João Silva"));

console.log("\nLista de usuários após atualização:", listarUsuarios());

console.log("\nDeletando usuário 1:", deletarUsuario(1));

console.log("\nLista de usuários após exclusão:", listarUsuarios());
