/**document.getElementById("myButton").onclick = function() {

            if (document.getElementById("text").innerHTML == "Hello Akriti") {

                document.getElementById("text").innerHTML = "Hello Unnati";

            } else {

            document.getElementById("text").innerHTML = "Hello Akriti";
            }
        } **/

 /**       document.getElementById("secondButton").onclick = function() {
            if(document.getElementById("secondtext").innerHTML == "hi") {

                document.getElementById("secondtext").innerHTML = document.getElementById("secondtext").innerHTML + "i drive a chevrolet movie theater";
            } else {

            document.getElementById("secondtext").innerHTML = "hi";

            }
        } **/

 /**           document.getElementById("red-circle").onclick = function() {

                document.getElementById("red-circle").style.display = "none";
                document.body.style.backgroundColor = 'green';

            }

            document.getElementById("blue-circle").onclick = function() {

                document.getElementById("blue-circle").style.display = "none";

            }

            document.getElementById("yellow-circle").onclick = function() {

                document.getElementById("yellow-circle").style.display = "none";

            } **/

            var matrixTraverser = 0;
            var pivotSecured = 0;
            var numPivots = 0;
            var lastStep = 0;
            var rowsAltered = 0;
            var numZeroes = 0;

            document.getElementById("inputValues").onclick = function() {

//                        document.getElementById("secondtext").innerHTML = document.getElementById('i').value;
                        if (!(isNaN((document.getElementById('i').value))) && !(isNaN((document.getElementById('j').value)))) {
                            if (document.getElementById('i').value > 10 || document.getElementById('i').value <= 0
                            || document.getElementById('j').value > 10 || document.getElementById('j').value <= 0){
                                document.getElementById("inputMatrixHolder").innerHTML = "";
                                document.getElementById("text").innerHTML = "please make sure both values are numbers in the range [1,10] plssss";
                            } else {
                                document.getElementById("text").innerHTML = "thank you for following instructions have a gold star";
                                setUpInputMatrix(document.getElementById('i').value, document.getElementById('j').value);

                               /** var letsGoButton = document.createElement("button");
                                letsGoButton.setAttribute('id', "letsGo");
                                letsGoButton.setAttribute('class', "button");
                                var textNode = document.createTextNode("Let's start reducing!");
                                letsGoButton.appendChild(textNode);
                                document.getElementById("letsGoDiv").appendChild(letsGoButton); **/
                                document.getElementById("letsGo").style.visibility = "visible";


                            }
                        } else {
                            document.getElementById("inputMatrixHolder").innerHTML = "";
                            document.getElementById("text").innerHTML = "please make sure both values are numbers plssss";
                        }
                    }

            /*
             * creates the matrix with the inputted dimensions and cells the user can fill in with values
             */

            function setUpInputMatrix(i, j) {
                var matrixTable = document.createElement("table");
                matrixTable.setAttribute('iDimension', i);
                matrixTable.setAttribute('jDimension', j);
                matrixTable.setAttribute('id', "inputMatrix");

                for (var k = 0; k < i; k++) {
                    var tr = document.createElement("tr");
                    tr.setAttribute('class', k);
                    for (var m = 0; m < j; m++) {
                        var th = document.createElement("th");
                        th.setAttribute('class', m);
                        var entryHolder = document.createElement("form");
                        var entry = document.createElement("input");
                        entry.setAttribute('placeholder', "?");
                        entry.setAttribute('type', "text");
                        entry.setAttribute('class', "input");
                        entry.setAttribute('id', k.toString() + m.toString());
                        console.log("the km string hopefully: " + entry.getAttribute('id'));
                        entryHolder.appendChild(entry);
                        th.appendChild(entryHolder);
                        tr.appendChild(th);
                    }
                        matrixTable.append(tr);
                }
                document.getElementById("inputMatrixHolder").innerHTML = "";
                document.getElementById("inputMatrixHolder").appendChild(matrixTable);
                var fillInPrompt = document.createElement("p");
                var textNode = document.createTextNode("Fill in each cell with your desired value (numerical values only)");
                fillInPrompt.setAttribute('class', "prompt");
                fillInPrompt.appendChild(textNode);
                //document.getElementById("inputMatrixHolder").appendChild(fillInPrompt);
                document.getElementById("inputPrompt").appendChild(fillInPrompt);
                var potentialErrorMessage = document.createElement("p");
                potentialErrorMessage.setAttribute('id', "potentialErrorMessage");
                potentialErrorMessage.setAttribute('class', "prompt");
                document.getElementById("inputMatrixHolder").appendChild(potentialErrorMessage);
            }

            /*
             * makes sure the matrix populated by the user has only numerical values
             */

            document.getElementById("letsGo").onclick = function() {
                console.log("hi");
                document.getElementById("generalMatrixHolder").innerHTML = "";
                var i = document.getElementById("inputMatrix").getAttribute('iDimension');
                var j = document.getElementById("inputMatrix").getAttribute('jDimension');

                for (var k = 0; k < i; k++) {
                    for (var m = 0; m < j; m++) {
                        console.log("the value hopefully: " + document.getElementById(k.toString() + m.toString()).value);
                        document.getElementById(k.toString() + m.toString()).setAttribute('value', document.getElementById(k.toString() + m.toString()).value);
                        console.log("value being tested!: " + document.getElementById(k.toString() + m.toString()).getAttribute('value'));
                        if (isNaN(document.getElementById(k.toString() + m.toString()).getAttribute('value')) ||
                        document.getElementById(k.toString() + m.toString()).getAttribute('value') == "") {
                            console.log("ooops");
                            document.getElementById("potentialErrorMessage").innerHTML =
                            "Make sure each cell has numerical values only!";
                            return;
                        } else {
                            document.getElementById("potentialErrorMessage").innerHTML = "";
                            //document.getElementById(k.toString() + m.toString()).removeAttribute('id');
                            //document.getElementById("th" + k.toString() + m.toString()).setAttribute('id', k.toString() + m.toString());
                        }
                    }
                }
                createStartingMatrix(i, j);
                console.log("hello");

            }

            /*
             * assuming all the matrix populated by the user has only numerical values, we store the info in a starting
             * matrix so we can reduce from there. also creates the text node that will include the information about
             * what is happening to the matrix. also brings the 'next' button into view
             */

            function createStartingMatrix(i, j) {
                var matrixTable = document.createElement("table");
                matrixTable.setAttribute('iDimension', i);
                matrixTable.setAttribute('jDimension', j);
                matrixTable.setAttribute('id', "startingMatrix");

             for (var k = 0; k < i; k++) {
                    var tr = document.createElement("tr");
                    tr.setAttribute('class', "generalCell");
                    for (var m = 0; m < j; m++) {
                        var th = document.createElement("th");
                        th.setAttribute('class', "generalCell");
                        th.setAttribute('id', "final" + k.toString() + m.toString());
                        var value = document.getElementById(k.toString() + m.toString()).getAttribute('value');
                        var textNode = document.createTextNode(value);
                        th.setAttribute('value', value);
                        th.appendChild(textNode);
                        tr.appendChild(th);
                    }
                        matrixTable.append(tr);
                }
                document.getElementById("generalMatrixHolder").appendChild(matrixTable);
                var explanationText = document.createElement("p");
                explanationText.setAttribute("id", 'explanationText');
                var textNode = document.createTextNode("This is the matrix we start with. Keep pressing the 'next' "
                 + "button to see the reduction steps");
                 explanationText.appendChild(textNode);
                 document.getElementById("generalMatrixHolder").appendChild(explanationText);
                 document.getElementById("next").style.visibility = "visible";
            }

            /*
             * functionality of the 'next' button
             */

             document.getElementById("next").onclick = function() {
                console.log("numpivots: " + numPivots);
                var iDimension = document.getElementById("startingMatrix").getAttribute('iDimension');
                var jDimension = document.getElementById("startingMatrix").getAttribute('jDimension');

                if (lastStep == 1){
                    document.getElementById("explanationText").innerHTML = "Yay that's it, we're done reducing the matrix! This is one "
                    + "of many echelon forms of the matrix you originally inputted.";
                    return;
                }

                if (((iDimension > jDimension) && ((matrixTraverser + 1) > parseInt(jDimension))) ||
                ((jDimension > iDimension) && ((matrixTraverser + 1) == parseInt(iDimension))) ||
                ((jDimension == iDimension) && ((matrixTraverser + 1) == parseInt(iDimension)))) {
                    lastStep = 1;
                }

                if (pivotSecured != 1){
                var currentValue = parseInt(document.getElementById("final" + matrixTraverser.toString() + matrixTraverser.toString()).getAttribute('value'));
                    if (currentValue != 1 && currentValue != 0) {
                        for (var h = matrixTraverser; h < jDimension; h++){
                            var intValue = parseInt(document.getElementById("final" + matrixTraverser.toString() + h.toString()).getAttribute('value'));
                            document.getElementById("final" + matrixTraverser.toString() + h.toString()).innerHTML = (intValue/currentValue).toString();
                            document.getElementById("final" + matrixTraverser.toString() + h.toString()).setAttribute('value', (intValue/currentValue).toString());
                        }
                        document.getElementById("explanationText").innerHTML = "The entry at index " + (matrixTraverser + 1) +
                        ", " + (matrixTraverser + 1) + " was not a 1, so we divided the entire row by " + currentValue
                        + "<br>" + "Now we have a pivot of 1 at the " + (matrixTraverser + 1) + ", " + (matrixTraverser + 1) + " index"
                        + "<br>" + "R" + (matrixTraverser + 1) + " = R" + (matrixTraverser + 1) + "/" + currentValue;
                        pivotSecured = 1;
                        numPivots++;
                        return;
                        }
                     if (currentValue == 1) {
                         document.getElementById("explanationText").innerHTML = "The entry at index " + (matrixTraverser + 1) +
                         ", " + (matrixTraverser + 1) + " was already a 1, so we don't need to do anything."
                         pivotSecured = 1;
                         numPivots++;
                         return;
                     }
                     if (currentValue == 0) {
                        if (lastStep == 1){
                                document.getElementById("explanationText").innerHTML = "The entry at index " + (matrixTraverser + 1) +
                                ", " + (matrixTraverser + 1) + " is a 0, and it is the last entry in its column. There"
                                 + " won't be a pivot in this column.";
                                 return;
                        }
                        var firstRow = [];
                        for (var h = 0; h < jDimension; h++) {
                            var intValue = document.getElementById("final" + matrixTraverser.toString() + h.toString()).getAttribute('value');
                            console.log("MADE IT HERE: " + intValue);
                            firstRow.push(intValue);
                            console.log("first row term " + h + ": " + intValue);
                        }
                        var rowCopyIndex = 1;
                        console.log("matrix traverser here: " + matrixTraverser);
                        while(parseInt(document.getElementById("final" + (matrixTraverser + rowCopyIndex).toString() + matrixTraverser.toString()).getAttribute('value')) == 0) {
                            console.log("valueeeee: " + matrixTraverser + rowCopyIndex);
                            rowCopyIndex++;

                            if (rowCopyIndex + matrixTraverser == iDimension) {
                                document.getElementById("explanationText").innerHTML = "The entry at index " + (matrixTraverser + 1) +
                                ", " + (matrixTraverser + 1) + " is a 0, and so is every entry under it in the same column. There"
                                 + " won't be a pivot in this column.";
                                 matrixTraverser++;
                                 return;
                            }
                        }
                        for (var h = 0; h < jDimension; h++) {

                            var valueToCopy = document.getElementById("final" + (matrixTraverser + rowCopyIndex).toString() + h.toString()).getAttribute('value');

                            document.getElementById("final" + matrixTraverser.toString() + h.toString()).setAttribute('value', valueToCopy);
                            document.getElementById("final" + matrixTraverser.toString() + h.toString()).innerHTML = valueToCopy;

                            document.getElementById("final" + (matrixTraverser + rowCopyIndex).toString() + h.toString()).setAttribute('value', firstRow[h]);
                            document.getElementById("final" + (matrixTraverser + rowCopyIndex).toString() + h.toString()).innerHTML = firstRow[h];
                        }

                        document.getElementById("explanationText").innerHTML = "The entry at index " + (matrixTraverser + 1) +
                        ", " + (matrixTraverser + 1) + " is a 0. We want a nonzero value,  so we switch this row with the" +
                         " first row that has a nonzero value in the same column. This happened to be R" + (matrixTraverser + rowCopyIndex + 1)
                         + "." + "<br>" + "R" + (matrixTraverser + 1) + "<->" + "R" + (matrixTraverser + rowCopyIndex + 1);
                         return;
                     }
                     }
                     if (pivotSecured == 1){
                        console.log("HEREEEEEEE");
                        for (var h = matrixTraverser + 1; h < iDimension; h++) {
                            console.log("h: " + h);
                            console.log("stuff under our pivot: " + document.getElementById("final" + h.toString() + matrixTraverser.toString()).getAttribute('value'));
                            var intValue = parseInt(document.getElementById("final" + h.toString() + matrixTraverser.toString()).getAttribute('value'));
                            console.log("int value: " + intValue);
                            var multiplier = intValue;
                            if (intValue != 0) {
                                console.log("int value: " + intValue);
                                for (var k = matrixTraverser; k < jDimension; k++) {
                                    var valueAfterSubtraction = (((parseInt(document.getElementById("final" + h.toString() + k.toString()).getAttribute('value')))) -
                                       (multiplier * (parseInt(document.getElementById("final" + matrixTraverser.toString() + k.toString()).getAttribute('value')))));

                                    document.getElementById("final" + h.toString() + k.toString()).setAttribute('value', valueAfterSubtraction.toString());
                                    document.getElementById("final" + h.toString() + k.toString()).innerHTML = valueAfterSubtraction;
                             document.getElementById("explanationText").innerHTML = "To get a 0 in the entry under the index "
                              + (matrixTraverser + 1) + ", " + (matrixTraverser + 1) + " in R" + (h + 1) + ", we subtracted " + intValue + " times R"
                              + (matrixTraverser + 1) + " from R" + (h + 1) + "." + "<br>" + "R" + (h + 1) + " - " + intValue + "R" + (matrixTraverser + 1);
                                }
                                if (h == iDimension - 1) {
                                    document.getElementById("explanationText").innerHTML += "<br>" + "This is the last entry in this column," +
                                     " so we're ready to move on to the next column now.";
                                    matrixTraverser++;
                                    pivotSecured = 0;
                                }
                                rowsAltered++;
                                console.log("matrix traverser: " + matrixTraverser);
                                console.log("pivot secured: " + pivotSecured);
                                return;
                            } else {
                                numZeroes++;
                            }
                            console.log("h: " + h);
                            console.log("numZeroes: " + numZeroes);
                            if ((h == iDimension - 1) && /*(numZeroes == iDimension - (matrixTraverser + 1)) &&*/ (rowsAltered > 0)) {
                                 document.getElementById("explanationText").innerHTML = "There are no more nonzero entries. " +
                                 "We're ready to move on to the next column now.";
                                 rowsAltered = 0;
                                 numZeroes = 0;
                                 matrixTraverser++;
                                 pivotSecured = 0;
                                 return;
                            }
                            if ((h == iDimension - 1) && /*(numZeroes == iDimension - (matrixTraverser + 1)) &&*/ (rowsAltered == 0)) {
                                console.log("numZeroes: " + numZeroes);
                                console.log("iDimension: " + iDimension);
                                console.log("matrix traverser: " + matrixTraverser);
                                document.getElementById("explanationText").innerHTML = "There are no nonzero entries under the entry at index "
                                + (matrixTraverser + 1) + ", " + (matrixTraverser + 1) + ". We're ready to move on to the next column now.";
                                numZeroes = 0;
                                matrixTraverser++;
                                pivotSecured = 0;
                                return;
                            }
                        }
                     }
                     }



            /*
             * creates an array of matrices to display as the 'next' button is clicked. also creates an array of the
             * text info that accompanies each matrix
             */

/*            function generateMatrixArray(i, j) {
                for (var k = 0; k < i; k++) {
                    for (var m = 0; m < j; m++) {
                        var currentValue = parseInt(document.getElementById("final" + k.toString() + m.toString()).getAttribute('value');
                        if (currentValue > 1)) {
                            for (var h = m; h < j; h++) {
                                var intValue = parseInt(document.getElementById("final" + k.toString() + h.toString()).getAttribute('value');
                                document.getElementById("final" + k.toString() + h.toString()).innerHTML = (intValue/currentValue).toString();
                            }
                        }
                    }
                }

            } */





