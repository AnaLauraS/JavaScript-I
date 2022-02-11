module.exports=function () {
    let nuevoArray=[]
    for (let i=0; i<this.profesionales.length;i++){
      let consulta=this.profesionales[i]
      consulta.nombre=consulta.nombre.charAt(0).toUpperCase() + consulta.nombre.slice(1);
      nuevoArray.push(consulta);
    }
    return nuevoArray;
  }