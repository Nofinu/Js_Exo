import ToDo from "./ToDo.js";

export default class Ihm {
    constructor(formAddToDo,btnResearch,tableDisplay){
        this.formAddToDo = formAddToDo;
        this.btnResearch = btnResearch;
        this.tableDisplay = tableDisplay;
        this.ToDoListe = [];
    }

    start(){
        this.formAddToDo.addEventListener('submit',async (e)=>{
            e.preventDefault();
            let test = true;
            console.log("entre")
            this.ToDoListe.forEach(todo =>{
                if(todo.title == this.formAddToDo.querySelector('#inputTitle').value){
                    test = false;
                    return
                }
            })
            if(test){
                await this.AddToDo(this.formAddToDo.querySelector('#inputTitle').value,this.formAddToDo.querySelector('#content').value);
                const result = await this.refreshTable(document.querySelector('#entryResearch').value);
                console.log(result);
            }
            else{
                console.error(`Elements ${this.formAddToDo.querySelector('#inputTitle').value} deja present dans le tableau !`);
            }
        });

        this.btnResearch.addEventListener('click',async ()=>{
            await this.refreshTable(document.querySelector('#entryResearch').value);
            console.log("recherche terminer");
        });

        document.querySelector('#entryResearch').addEventListener('input',()=>{
            this.tempo();
        });

        document.addEventListener('click',async (e)=>{
            if(e.target.dataset.btn =='surp'){
                console.log(await this.SuprToDo(Number(e.target.dataset.surp)));
                await this.refreshTable(document.querySelector('#entryResearch').value);
            }
            if(e.target.dataset.btn == "Fait"){
                this.ToDoListe[e.target.dataset.status].status = false;
                this.refreshTable(document.querySelector('#entryResearch').value);
            }
            if(e.target.dataset.btn == "A faire"){
                this.ToDoListe[e.target.dataset.status].status = true;
                this.refreshTable(document.querySelector('#entryResearch').value);
            }
        });
    }

    tempo(){
        setTimeout(async ()=>{
            await this.refreshTable(document.querySelector('#entryResearch').value);
        },1000)
    }

    async AddToDo(title,content){
        console.log("entre addtodo");
        this.ToDoListe.push(await this.CreateToDo(title,content));
    }

    CreateToDo(title,content){
        console.log("entre create todo");
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(new ToDo(title,content));
            },800);
        });
    }

    SuprToDo(index){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                this.ToDoListe.splice(index,1);
                resolve('supresion terminer');
            },500)
        });
    }

    refreshTable(entry=""){
        console.log("entre refresh tab");
        return new Promise((resolve)=>{
            setTimeout(()=>{
                this.tableDisplay.innerHTML="";
                this.ToDoListe.forEach(Todo =>{
                    if(Todo.title.includes(entry)){
                        this.tableDisplay.innerHTML +=`<tr>
                        <td>${this.ToDoListe.indexOf(Todo)+1}</td>
                        <td>${Todo.title}</td>
                        <td>${Todo.content}</td>
                        <td>
                        <button data-btn="surp" data-surp="${this.ToDoListe.indexOf(Todo)}" class="btnSurp"><img data-btn="surp" src="./asset/trash3.svg" alt="trash"></button>
                        <button data-btn="${Todo.status? "Fait": "A faire"}" data-status="${this.ToDoListe.indexOf(Todo)}" ${Todo.status? "class='btnDo'": "class='btnToDo'"}>${Todo.status? `<img data-btn="Fait" data-status="${this.ToDoListe.indexOf(Todo)}" src="./asset/check-circle.svg" alt="fait">`: `<img data-btn="A faire" data-status="${this.ToDoListe.indexOf(Todo)}" src="./asset/clock.svg" alt="a faire">`}</button>
                        </td>
                        </tr>`;
                    }
                });
                resolve( 'affichage fini');
            },500);
        })
    }
}