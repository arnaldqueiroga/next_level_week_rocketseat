// importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose();

//criar objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db');

module.exports = db; // modele.exports serve para exportarmos o objeto db (que é o objeto responsãvel por fazer todas as operações no nosso banco de dados), para utilizarmos este objeto em nossa aplicação, e não no arquivo db.js

//utilizar o objeto de banco de dados para nossas operações
// db.serialize(() => {
//                      // com comando SQL eu vou:

//                      // 1 Criar uma tabela
//                      // db.run(`
//                      //       CREATE TABLE IF NOT EXISTS places (
//                      //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//                      //         image TEXT,
//                      //         name TEXT,
//                      //         address TEXT,
//                      //         address2 TEXT,
//                      //         state TEXT,
//                      //         city TEXT,
//                      //         items TEXT
//                      //       );
//                      // `);

//                      // // // 2 Inserir dados na tabela
//                      // const query = `
//                      //             INSERT INTO places (
//                      //               image,
//                      //               name,
//                      //               address,
//                      //               address2,
//                      //               state,
//                      //               city,
//                      //               items
//                      //             ) VALUES (?,?,?,?,?,?,?);
//                      // `;
//                      // const values = [
//                      //   'https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//                      //   'Colectoria',
//                      //   'Guilherme Gemballa, Jardin América',
//                      //   'Número  260',
//                      //   'Santa Catarina',
//                      //   'Rio do Sul',
//                      //   'Resíduos Eletrônicos, Lâmpadas',
//                      // ];

//                      // function afterInsertData(err) {
//                      //   if (err) {
//                      //     return console.log(err);
//                      //   }
//                      //   console.log('Cadastrado com sucesso');
//                      //   console.log(this); // O This refenrica a resposta que o run tá trazendo pra gente
//                      // }

//                      // db.run(query, values, afterInsertData);

//                      //  // 3 Consultar os dados da tabela

//                      db.all(`SELECT *  FROM places`, function (err, rows) {
//                        if (err) {
//                          return console.log(err);
//                        }

//                        console.log('Aqui estão seus registros: ');
//                        console.log(rows); // rows dentro de console.log para podermos vermos os registros
//                      });

//                     //  // 4 Deletar dados da tabela
//                     //  db.run(`DELETE FROM places WHERE id = ?`, [5], function (err) {
//                     //    if (err) {
//                     //      return console.log(err);
//                     //    }
//                     //    console.log('Registro deletado com sucesso!');
//                     //  });

//                    });
