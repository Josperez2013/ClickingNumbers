function box(num){
    let that = this;
    this.number=0
    this.ele=document.createElement("div");
    this.ele.style.height="100px";
    this.ele.style.width="200px";
    this.ele.style.backgroundColor= num.color;


    this.ele.addEventListener("click", function(){
        that.numberUp(1);
    })
    
    this.eleNum=document.createElement("div");
    this.eleNum.innerHTML=this.number;
    this.eleNum.style.fontSize="18px";
    this.ele.appendChild(this.eleNum);
    this.ele.style.display="flex";
    this.ele.style.justifyContent="center";
    this.ele.style.alignItems="center";
    this.ele.style.borderRadius="10px";
    document.body.appendChild(this.ele);
}

box.prototype.numberUp=function(nm){
    this.number=this.number+nm;
    this.eleNum.innerHTML=this.number;
}

let list =[{color: "red"},{ color:"blue"}, {color: "green"}];
let elements=[];

for (obj in list){
    elements.push(new box(list[obj]));
};
