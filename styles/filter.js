function myFilterButtonTurma(n) {
    displayNoneTurma(-1);
    document.getElementById(n).style.display = "block";
}
function myFilterButtonProfessor(n) {
    displayNoneProfessor(-1);
    document.getElementById(n).style.display = "block";
}
function myFilterTurma() {
    var input, filter;
    input = document.getElementById("myInputTurma");
    filter = input.value;
    document.getElementById(filter).style.display = "block";
}
function myFilterProfessor() {
    var input, filter;
    input = document.getElementById("myInputProfessor");
    filter = input.value;
    document.getElementById(filter).style.display = "block";
}
function displayNoneTurma(s){
    var b = [];
    b.push('{{ site.data.turma.turmas[0] }}');b.push('{{ site.data.turma.turmas[1] }}');b.push('{{ site.data.turma.turmas[2] }}');
    b.push('{{ site.data.turma.turmas[3] }}');b.push('{{ site.data.turma.turmas[4] }}');b.push('{{ site.data.turma.turmas[5] }}');
    b.push('{{ site.data.turma.turmas[6] }}');b.push('{{ site.data.turma.turmas[7] }}');b.push('{{ site.data.turma.turmas[8] }}');
    b.push('{{ site.data.turma.turmas[9] }}');b.push('{{ site.data.turma.turmas[10] }}');b.push('{{ site.data.turma.turmas[11] }}');
    while(b.length > 0){
      var c = b.pop()
      if(document.getElementById(c).style.display == "block"){
        document.getElementById(c).style.display = "none";
      }
    }
    if(s == 1){
      myFilterTurma();
    }else if(s == 0){
      hide_lists(); 
    }else{

    }
}
function displayNoneProfessor(s){
    var b = [];
    b.push('{{ site.data.professor.professores[0]}}');b.push('{{ site.data.professor.professores[1]}}');b.push('{{ site.data.professor.professores[2]}}');
    b.push('{{ site.data.professor.professores[3]}}');b.push('{{ site.data.professor.professores[4]}}');b.push('{{ site.data.professor.professores[5]}}');
    b.push('{{ site.data.professor.professores[6]}}');b.push('{{ site.data.professor.professores[7]}}');b.push('{{ site.data.professor.professores[8]}}');
    b.push('{{ site.data.professor.professores[9]}}');b.push('{{ site.data.professor.professores[10]}}');b.push('{{ site.data.professor.professores[11]}}');
    b.push('{{ site.data.professor.professores[12]}}');b.push('{{ site.data.professor.professores[13]}}');b.push('{{ site.data.professor.professores[14]}}');
    b.push('{{ site.data.professor.professores[15]}}');b.push('{{ site.data.professor.professores[16]}}');b.push('{{ site.data.professor.professores[17]}}');
    b.push('{{ site.data.professor.professores[18]}}');b.push('{{ site.data.professor.professores[19]}}');b.push('{{ site.data.professor.professores[20]}}');
    b.push('{{ site.data.professor.professores[21]}}');b.push('{{ site.data.professor.professores[22]}}');b.push('{{ site.data.professor.professores[23]}}');
    b.push('{{ site.data.professor.professores[24]}}');b.push('{{ site.data.professor.professores[25]}}');b.push('{{ site.data.professor.professores[26]}}');
    b.push('{{ site.data.professor.professores[27]}}');b.push('{{ site.data.professor.professores[28]}}');b.push('{{ site.data.professor.professores[29]}}');
    b.push('{{ site.data.professor.professores[30]}}');b.push('{{ site.data.professor.professores[31]}}');b.push('{{ site.data.professor.professores[32]}}');
    b.push('{{ site.data.professor.professores[33]}}');b.push('{{ site.data.professor.professores[34]}}');b.push('{{ site.data.professor.professores[35]}}');
    b.push('{{ site.data.professor.professores[36]}}');b.push('{{ site.data.professor.professores[37]}}');b.push('{{ site.data.professor.professores[38]}}');
    b.push('{{ site.data.professor.professores[39]}}');b.push('{{ site.data.professor.professores[40]}}');
    while(b.length > 0){
      var c = b.pop();
      if(document.getElementById(c).style.display == "block"){
        document.getElementById(c).style.display = "none";
      }
    }
    if(s == 1){
      myFilterProfessor();
    }else if(s == 0){
      hide_lists(); 
    }else{

    }
}
