module.exports = function (id) {
    for (let i=0; i<this.profesionales.length;i++){
      const consulta=this.profesionales[i]
      if (consulta.id===id){
        return consulta;
      }
    }
  }