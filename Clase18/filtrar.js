module.exports = function (){
    let mejoresProf = [];
    for (let i=0; i<this.profesionales.length;i++){
      const prof=this.profesionales[i];
      if (prof.puntaje>=7){
        mejoresProf.push(prof)
      }
    }
    return mejoresProf
  }