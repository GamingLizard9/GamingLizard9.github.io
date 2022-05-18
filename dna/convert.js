//All values for converting RNA codons into amino acids (why are there so many)
const codonTable = {
    "aaa": "Lys","aac": "Asn","aag": "Lys","aau": "Asn","aca": "Thr","acc": "Thr","acg": "Thr","acu": "Thr",
    "aga": "Arg","agc": "Ser","agg": "Arg","agu": "Ser","aua": "Ile","auc": "Ile","aug": "Met","auu": "Ile",
    "caa": "Gln","cac": "His","cag": "Gln","cau": "His","cca": "Pro","ccc": "Pro","ccg": "Pro","ccu": "Pro",
    "cga": "Arg","cgc": "Arg","cgg": "Arg","cgu": "Arg","cua": "Leu","cuc": "Leu","cug": "Leu","cuu": "Leu",
    "gaa": "Glu","gac": "Gsp","gag": "Glu","gau": "Gsp","gca": "Ala","gcc": "Ala","gcg": "Ala","gcu": "Ala",
    "gga": "Gly","ggc": "Gly","ggg": "Gly","ggu": "Gly","gua": "Val","guc": "Val","gug": "Val","guu": "Val",
    "uaa": "Stop","uac":"Tyr","uag": "Stop","uau":"Tyr","uca": "Ser","ucc": "Ser","ucg": "Ser","ucu": "Ser",
    "uga": "Stop","ugc":"Cys","ugg": "Trp","ugu": "Cys","uua": "Leu","uuc": "Phe","uug": "Leu","uuu": "Phe"
}

//Function that converts DNA strings to RNA
function transcribe(dna) {
    var rna = "";
    var dna = dna.toLowerCase()
    for(let i = 0; i < dna.length; i++) {
        switch(dna[i]) {
            case "a":
                rna += "u";
                break;
            case "t":
                rna += "a";
                break;
            case "c":
                rna += "g";
                break;
            case "g":
                rna += "c";
                break;
        }

    }
    return(rna);
}

//Function that converts RNA strings into amino acids
function translate(rna) {
    var output = ""
    if(rna.length % 3 != 0) {
        return("Error: Wrong length")
    }
    for(let i = 0; i < rna.length; i += 3) {
        var currentCodon = ""
        for(let j = 0; j < 3; j += 1) {
            currentCodon += rna.charAt(i+j)
        }
        console.log(currentCodon)
        output += codonTable[currentCodon];
        
        if(i != rna.length - 3) {
            output += "|";
        }
    }
    return(output);
}

function convert(value) {
    var output1 = transcribe(value);
    document.getElementById("rna-out").innerHTML = output1;
    var output2 = translate(output1);
    document.getElementById("amino-out").innerHTML = output2;
}