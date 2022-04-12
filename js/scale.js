let body = d3.select("body")
    .data(producten)

let index = 0

let score = []

// let tekstdeel1 = "De CO2 uitstoot van de productie tot de cosumptie van <b>"

function begin(){
        let svg = d3.select("body").append("svg")
                .attr("height", 650)
                .attr("width", 1000)
                .style("background", "lightgrey")

        svg
            .append("text")
            .text("Vanaf de productie tot aan het cosumeren van eten komen veel gassen vrij. Het is belangrijk om hier bewust van te zijn!")
            .attr("font-size", "20")
            .attr("x", "25")
            .attr("y", "250")

        svg
            .append("text")
            .text("Door bewust na te denken bij keuzes van etenswaren kan de CO2 uitstoot hierbij al met de helft verminderen!")
            .attr("font-size", "20")
            .attr("x", "25")
            .attr("y", "270")

        svg
            .append("text")
            .text("U krijgt 10 keer 2 etenswaren te zien, klik vervolgens op het product dat volgens u de meeste CO2 uitstoot!")
            .attr("font-size", "20")
            .attr("x", "25")
            .attr("y", "310")

        svg
            .append("text")
            .text("Klik op 'start' om te beginnen!")
            .attr("font-size", "20")
            .attr("font-weight", "bold")
            .attr("x", "25")
            .attr("y", "370")

        let button = d3.select("body").append("button")
            .text("Start")
            .on("click", drawscale)

}
begin()

function drawscale(){
        body.selectAll("*").remove()

        let svg = d3.select("body").append("svg")
            .attr("height", 650)
            .attr("width", 1000)
            .style("background", "lightgrey") 

        svg
            .append("text")
            .text("Bij welk product onstaat de meeste CO2 uitstoot van productie tot cosumptie?")
            .attr("font-size", "20")
            .attr("x", "180")
            .attr("y", "90")

        svg
            .append("text")
            .text(function food1(d){
                    if(index<10){
                    d = producten[index]
                    return d.eten1}
                    })
            .attr("font-size", "20")
            .attr("x", "250")
            .attr("y", "450")

        svg
            .append("text")
            .text(function food2(d){
                    if(index<10){
                    d = producten[index]
                    return d.eten2}
                    })
            .attr("font-size", "20")
            .attr("x", "630")
            .attr("y", "450")


        svg
            .style("background", "lightgrey")

        svg
            .append("polygon")
            .attr("points", "495,150 505,150 508,550 530,550 530,570 553,570 553,590 448,590 448,570 470,570 470,550 493,550")
            .style("fill", "black")
            
        svg
            .append("rect")
            .attr("x","225")
            .attr("y","210")
            .attr("width", "550")
            .attr("height", "7")
            .style("fill","black")

        svg
            .append("ellipse")
            .attr("cx", "308")
            .attr("cy", "385")
            .attr("rx", "54")
            .attr("ry", "15")
            .style("fill", "black")

        svg
            .append("ellipse")
            .attr("cx", "685")
            .attr("cy", "385")
            .attr("rx", "54")
            .attr("ry", "15")
            .style("fill", "black")    

        svg
            .append("polygon")
            .attr("points", "311,182 316,187 261,387 256,382")
            .style("fill", "black")

        svg
            .append("image")
            .attr("xlink:href", function picture(d){
                                    if(index<10){
                                        d = producten[index]
                                        return d.foto1}
                                    else {
                                        einde()
                                    }

            })
            .on("click", function display(d){
                if(index<10){
                    d = producten[index]
                    if(d.keuze1 == "goedrechts"){
                        return goedrechts()
                    }
                    else if(d.keuze1 == "foutrechts"){
                        return foutrechts()
                    }
                    else if(d.keuze1 == "foutlinks"){
                        return foutlinks()
                    }
                    else {
                        return goedlinks()
                    }
                }
                
            })
            .attr("width", "150")
            .attr("height", "150")
            .attr("x","233")
            .attr("y","255")

        svg
            .append("polygon")
            .attr("points", "304,182 299,187 354,387 359,382")
            .style("fill", "black")

        svg
            .append("polygon")
            .attr("points", "691,182 696,187 635,387 630,382")
            .style("fill", "black")

        svg
            .append("image")
            .attr("xlink:href", function picture(d){
                                    if(index<10){
                                        d = producten[index]
                                        return d.foto2}
                                    else {
                                        einde()
                                    }

            })
            .on("click", function display(d){
                if (index<10){
                    d = producten[index]
                    if(d.keuze2 == "goedrechts"){
                        return goedrechts()
                    }
                    else if(d.keuze2 == "foutrechts"){
                        return foutrechts()
                    }
                    else if(d.keuze2 == "foutlinks"){
                        return foutlinks()
                    }
                    else {
                        return goedlinks()
                    }
                }
                
        })
            .attr("width", "150")
            .attr("height", "150")
            .attr("x","610")
            .attr("y","255")

        svg
            .append("polygon")
            .attr("points", "684,182 679,187 732,387 737,382")
            .style("fill", "black")

        // let button1 = body.append("button")
        //     .text(function name(d) {
        //         console.log(index)
        //         if(index<10){
        //             d = producten[index]
        //             return d.eten1}
        //         else {
        //             einde()
        //         }
        //     })
        //     .on("click", function display(d){
        //         d = producten[index]
        //         if(d.keuze1 == "goedrechts"){
        //             return goedrechts()
        //         }
        //         else if(d.keuze1 == "foutrechts"){
        //             return foutrechts()
        //         }
        //         else if(d.keuze1 == "foutlinks"){
        //             return foutlinks()
        //         }
        //         else {
        //             return goedlinks()
        //         }
        //     })


        // let button2 = body.append("button")
        //     .text(function name(d) {
        //         if(index<10){
        //             d = producten[index]
        //             return d.eten2}
        //         else {
        //             einde()
        //         }
        //     })
        //     .on("click", function display(d){
        //             d = producten[index]
        //             if(d.keuze2 == "goedrechts"){
        //                 return goedrechts()
        //             }
        //             else if(d.keuze2 == "foutrechts"){
        //                 return foutrechts()
        //             }
        //             else if(d.keuze2 == "foutlinks"){
        //                 return foutlinks()
        //             }
        //             else {
        //                 return goedlinks()
        //             }
        //     })

}

function goedlinks(){
    body.selectAll("*").remove()

    score.push(1)

    let svg = d3.select("body").append("svg")
        .attr("height", 650)
        .attr("width", 1000)
        .style("background", "lightgrey") 
    
    svg
        .append("polygon")
        .attr("points", "495,150 505,150 508,550 530,550 530,570 553,570 553,590 448,590 448,570 470,570 470,550 493,550")
        .style("fill", "black")
    
    svg
        .append("polygon")
        .attr("points", "225,190 227,183 777,240 775,247")
        .style("fill", "black")

    svg
        .append("ellipse")
        .attr("cx", "308")
        .attr("cy", "367")
        .attr("rx", "54")
        .attr("ry", "15")
        .style("fill", "black")

    svg
        .append("ellipse")
        .attr("cx", "685")
        .attr("cy", "402")
        .attr("rx", "54")
        .attr("ry", "15")
        .style("fill", "black")    

    svg
        .append("polygon")
        .attr("points", "311,162 316,167 261,367 256,362")
        .style("fill", "black")

    svg
        .append("image")
        .attr("xlink:href", function picture(d){
                                if(index<22){
                                d = producten[index]
                                return d.foto1}

                    })
        .attr("width", "150")
        .attr("height", "150")
        .attr("x","233")
        .attr("y","237")

    svg
        .append("polygon")
        .attr("points", "304,162 299,167 354,367 359,362")
        .style("fill", "black")

    svg
        .append("text")
        .text(function uitstoot (d){
            d = producten[index]
            return "De uitstoot van " + d.eten1 + " is " + d.uitstoot1 + "."
        })
        .attr("font-size", "18")
        .attr("x", "150")
        .attr("y", "500")

    svg
        .append("polygon")
        .attr("points", "691,202 696,207 635,407 630,402")
        .style("fill", "black")

    svg
        .append("image")
        .attr("xlink:href", function picture(d){
                                if(index<22){
                                d = producten[index]
                                return d.foto2}

                    })
        .attr("width", "150")
        .attr("height", "150")
        .attr("x","610")
        .attr("y","272")

    svg
        .append("polygon")
        .attr("points", "684,202 679,207 732,407 737,402")
        .style("fill", "black")

    svg
        .append("text")
        .text(function uitstoot (d){
            d = producten[index]
            return "De uitstoot van " + d.eten2 + " is " + d.uitstoot2 + "."
        })
        .attr("font-size", "18")
        .attr("x", "600")
        .attr("y", "500")

    svg
        .append("text")
        .text(function uitstoot (d){
            d = producten[index]
            if (d.uitstoot1>d.uitstoot2){
                return "De CO2 uitstoot van de productie tot de cosumptie van " + d.eten1 + " is dus het grootst."
            }
            else {
                return "De CO2 uitstoot van de productie tot de cosumptie van " + d.eten2 + " is dus het grootst."
            }
        })
        .attr("font-size", "18")
        .attr("x", "220")
        .attr("y", "620")   	

    svg
        .append("text")
        .text("Goede antwoorden: " + score.length)
        .attr("font-size", "18")
        .attr("x", "10")
        .attr("y", "570")

    svg
        .style("background","green")

    body
        .append("button")
        .text("Volgende ->")
        .on("click", drawscale)

    index = index + 1
    }

function foutlinks(){
    body.selectAll("*").remove()

    let svg = d3.select("body").append("svg")
            .attr("height", 650)
            .attr("width", 1000)
            .style("background", "lightgrey") 
    svg
        .append("polygon")
        .attr("points", "495,150 505,150 508,550 530,550 530,570 553,570 553,590 448,590 448,570 470,570 470,550 493,550")
        .style("fill", "black")

    svg
        .append("polygon")
        .attr("points", "225,190 227,183 777,240 775,247")
        .style("fill", "black")

    svg
        .append("ellipse")
        .attr("cx", "308")
        .attr("cy", "367")
        .attr("rx", "54")
        .attr("ry", "15")
        .style("fill", "black")

    svg
        .append("ellipse")
        .attr("cx", "685")
        .attr("cy", "402")
        .attr("rx", "54")
        .attr("ry", "15")
        .style("fill", "black")    

    svg
        .append("polygon")
        .attr("points", "311,162 316,167 261,367 256,362")
        .style("fill", "black")

    svg
        .append("image")
        .attr("xlink:href", function picture(d){
                                if(index<22){
                                d = producten[index]
                                return d.foto1}

                    })
        .attr("width", "150")
        .attr("height", "150")
        .attr("x","233")
        .attr("y","237")

    svg
        .append("polygon")
        .attr("points", "304,162 299,167 354,367 359,362")
        .style("fill", "black")

    svg
        .append("text")
        .text(function uitstoot (d){
            d = producten[index]
            return "De uitstoot van " + d.eten1 + " is " + d.uitstoot1 + "."
        })
        .attr("font-size", "18")
        .attr("x", "150")
        .attr("y", "500")

    svg
        .append("polygon")
        .attr("points", "691,202 696,207 635,407 630,402")
        .style("fill", "black")

    svg
        .append("image")
        .attr("xlink:href", function picture(d){
                                if(index<22){
                                d = producten[index]
                                return d.foto2}

                    })
        .attr("width", "150")
        .attr("height", "150")
        .attr("x","610")
        .attr("y","272")

    svg
        .append("polygon")
        .attr("points", "684,202 679,207 732,407 737,402")
        .style("fill", "black")

        svg
        .append("text")
        .text(function uitstoot (d){
            d = producten[index]
            return "De uitstoot van " + d.eten2 + " is " + d.uitstoot2 + "."
        })
        .attr("font-size", "18")
        .attr("x", "600")
        .attr("y", "500")

    svg
        .append("text")
        .text(function uitstoot (d){
            d = producten[index]
            if (d.uitstoot1>d.uitstoot2){
                return "De CO2 uitstoot van de productie tot de cosumptie van " + d.eten1 + " is dus het grootst."
            }
            else {
                return "De CO2 uitstoot van de productie tot de cosumptie van " + d.eten2 + " is dus het grootst."
            }
        })
        .attr("font-size", "18")
        .attr("x", "220")
        .attr("y", "620")

    svg
        .append("text")
        .text("Goede antwoorden: " + score.length)
        .attr("font-size", "18")
        .attr("x", "10")
        .attr("y", "570")

    svg
        .style("background","red")

    body
        .append("button")
        .text("Volgende ->")
        .on("click", drawscale)

    index = index + 1
    }

function goedrechts(){
        body.selectAll("*").remove()

        score.push(1)

        let svg = d3.select("body").append("svg")
            .attr("height", 650)
            .attr("width", 1000)
            .style("background", "lightgrey") 
        
        svg
            .append("polygon")
            .attr("points", "495,150 505,150 508,550 530,550 530,570 553,570 553,590 448,590 448,570 470,570 470,550 493,550")
            .style("fill", "black")
        
        svg
            .append("polygon")
            .attr("points", "225,247 227,240 777,183 775,190")
            .style("fill", "black")
    
        svg
            .append("ellipse")
            .attr("cx", "308")
            .attr("cy", "407")
            .attr("rx", "54")
            .attr("ry", "15")
            .style("fill", "black")
    
        svg
            .append("ellipse")
            .attr("cx", "685")
            .attr("cy", "362")
            .attr("rx", "54")
            .attr("ry", "15")
            .style("fill", "black")    
    
        svg
            .append("polygon")
            .attr("points", "311,202 316,207 261,407 256,402")
            .style("fill", "black")

        svg
            .append("image")
            .attr("xlink:href", function picture(d){
                                    if(index<22){
                                    d = producten[index]
                                    return d.foto1}

                        })
            .attr("width", "150")
            .attr("height", "150")
            .attr("x","228")
            .attr("y","277")
    
        svg
            .append("polygon")
            .attr("points", "304,202 299,207 354,407 359,402")
            .style("fill", "black")

        svg
            .append("text")
            .text(function uitstoot (d){
                d = producten[index]
                return "De uitstoot van " + d.eten1 + " is " + d.uitstoot1 + "."
            })
            .attr("font-size", "18")
            .attr("x", "150")
            .attr("y", "500")
    
        svg
            .append("polygon")
            .attr("points", "691,162 696,167 635,367 630,362")
            .style("fill", "black")

        svg
            .append("image")
            .attr("xlink:href", function picture(d){
                                    if(index<22){
                                    d = producten[index]
                                    return d.foto2}

                        })
            .attr("width", "150")
            .attr("height", "150")
            .attr("x","610")
            .attr("y","232")
    
        svg
            .append("polygon")
            .attr("points", "684,162 679,167 732,367 737,362")
            .style("fill", "black")

        svg
            .append("text")
            .text(function uitstoot (d){
                d = producten[index]
                return "De uitstoot van " + d.eten2 + " is " + d.uitstoot2 + "."
            })
            .attr("font-size", "18")
            .attr("x", "600")
            .attr("y", "500")
    
        svg
            .append("text")
            .text(function uitstoot (d){
                d = producten[index]
                if (d.uitstoot1>d.uitstoot2){
                    return "De CO2 uitstoot van de productie tot de cosumptie van " + d.eten1 + " is dus het grootst."
                }
                else {
                    return "De CO2 uitstoot van de productie tot de cosumptie van " + d.eten2 + " is dus het grootst."
                }
            })
            .attr("font-size", "18")
            .attr("x", "220")
            .attr("y", "620")

        svg
            .append("text")
            .text("Goede antwoorden: " + score.length)
            .attr("font-size", "18")
            .attr("x", "10")
            .attr("y", "570")

        svg
            .style("background","green")

        body
            .append("button")
            .text("Volgende ->")
            .on("click", drawscale)

        index = index + 1
        }

function foutrechts(){
            body.selectAll("*").remove()

            let svg = d3.select("body").append("svg")
                .attr("height", 650)
                .attr("width", 1000)
                .style("background", "lightgrey")


            svg
                .append("polygon")
                .attr("points", "495,150 505,150 508,550 530,550 530,570 553,570 553,590 448,590 448,570 470,570 470,550 493,550")
                .style("fill", "black")
            
            svg
                .append("polygon")
                .attr("points", "225,247 227,240 777,183 775,190")
                .style("fill", "black")
        
            svg
                .append("ellipse")
                .attr("cx", "308")
                .attr("cy", "407")
                .attr("rx", "54")
                .attr("ry", "15")
                .style("fill", "black")
        
            svg
                .append("ellipse")
                .attr("cx", "685")
                .attr("cy", "362")
                .attr("rx", "54")
                .attr("ry", "15")
                .style("fill", "black")    
        
            svg
                .append("polygon")
                .attr("points", "311,202 316,207 261,407 256,402")
                .style("fill", "black")

            svg
                .append("image")
                .attr("xlink:href", function picture(d){
                                        if(index<22){
                                        d = producten[index]
                                        return d.foto1}

                            })
                .attr("width", "150")
                .attr("height", "150")
                .attr("x","228")
                .attr("y","277")
        
            svg
                .append("polygon")
                .attr("points", "304,202 299,207 354,407 359,402")
                .style("fill", "black")
        
            svg
                .append("text")
                .text(function uitstoot (d){
                    d = producten[index]
                    return "De uitstoot van " + d.eten1 + " is " + d.uitstoot1 + "."
                })
                .attr("font-size", "18")
                .attr("x", "150")
                .attr("y", "500")

            svg
                .append("polygon")
                .attr("points", "691,162 696,167 635,367 630,362")
                .style("fill", "black")

            svg
                .append("image")
                .attr("xlink:href", function picture(d){
                                        if(index<22){
                                        d = producten[index]
                                        return d.foto2}

                            })
                .attr("width", "150")
                .attr("height", "150")
                .attr("x","610")
                .attr("y","232")
        
            svg
                .append("polygon")
                .attr("points", "684,162 679,167 732,367 737,362")
                .style("fill", "black")

            svg
                .append("text")
                .text(function uitstoot (d){
                    d = producten[index]
                    return "De uitstoot van " + d.eten2 + " is " + d.uitstoot2 + "."
                })
                .attr("font-size", "18")
                .attr("x", "600")
                .attr("y", "500")
        
            svg
                .append("text")
                .text(function uitstoot (d){
                    d = producten[index]
                    if (d.uitstoot1>d.uitstoot2){
                        return "De CO2 uitstoot van de productie tot de cosumptie van " + d.eten1 + " is dus het grootst."
                    }
                    else {
                        return "De CO2 uitstoot van de productie tot de cosumptie van " + d.eten2 + " is dus het grootst."
                    }
                })
                .attr("font-size", "18")
                .attr("x", "220")
                .attr("y", "620")

            svg
                .append("text")
                .text("Goede antwoorden: " + score.length)
                .attr("font-size", "18")
                .attr("x", "10")
                .attr("y", "570")
            
            svg
                .style("background","red")

            body
                .append("button")
                .text("Volgende ->")
                .on("click", drawscale)

            index = index + 1
            }

    function einde(){
        body.selectAll("*").remove()

        let svg = d3.select("body").append("svg")
                .attr("height", 650)
                .attr("width", 1000)
                .style("background", "lightgrey")
                .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")

        svg
            .append("text")
            .text("Uw score: " + score.length + " goed beantwoord van de 10.")
            .attr("font-size", "20")
            .attr("font-weight","bold")
            .attr("x", "50")
            .attr("y", "200")

        svg
            .append("text")
            .text(function number(){
                if (score.length == 10) {
                    return "Wow, alles goed! Neem wel toch nog snel een kijkje naar de volgende stappen om bewust keuzes te maken!:"
                }
                else if (score.length>5) {
                    return "Goed gedaan! Om nog beter/bewuster keuzes te maken, zijn de volgende stappen opgesteld!:"
                }
                else {
                    return "Oei.. Om beter/bewuster keuzes te maken, zijn de volgende stappen opgesteld!:"
                }
            })
            .attr("font-size", "20")
            .attr("x", "50")
            .attr("y", "245")

            
        svg
            .append("text")
            .text("1. Eet minder vlees: kies vaker peulvruchten en noten")
            .attr("font-size", "20")
            .attr("x", "50")
            .attr("y", "270")

        svg
            .append("text")
            .text("2. Verspil zo min mogelijk voedsel: koop en kook op maat")
            .attr("font-size", "20")
            .attr("x", "50")
            .attr("y", "290")

        svg
            .append("text")
            .text("3. Eet op maat, en niet te veel snacks en snoep")
            .attr("font-size", "20")
            .attr("x", "50")
            .attr("y", "310")

        svg
            .append("text")
            .text("4. Drink vooral kraanwater, thee en koffie")
            .attr("font-size", "20")
            .attr("x", "50")
            .attr("y", "330")

        svg
            .append("text")
            .text("5. Eet voldoende zuivel en kaas, maar niet meer dan nodig")
            .attr("font-size", "20")
            .attr("x", "50")
            .attr("y", "350")

        svg
            .append("text")
            .text("6. Kies seizoensproducten en kijk naar herkomst")
            .attr("font-size", "20")
            .attr("x", "50")
            .attr("y", "370")
            
        svg
            .append("text")
            .text("7. Kies voor topkeurmerken")
            .attr("font-size", "20")
            .attr("x", "50")
            .attr("y", "390")

        svg
            .append("text")
            .text("Voor meer informatie, kijk naar: ")
            .attr("font-size", "20")
            .attr("font-weight", "bold")
            .attr("x", "50")
            .attr("y", "450")

        svg
            .append("text")
            .attr("font-size", "20")
            .attr("x", "50")
            .attr("y", "470")
            .text("Complete uitleg voeding tips")
            .on("click", function() {window.open("https://www.voedingscentrum.nl/nl/duurzaam-eten/duurzaam-eten-in-7-stappen.aspx")})
            .style("fill", "blue")
            .style("text-decoration","underline")
    }