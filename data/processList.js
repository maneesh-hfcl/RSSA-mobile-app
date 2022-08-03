export function listProcesses(){
    const data =
        [
            {"Id":1, "Name":"Site survey", "Desc":"Site survey"},
            {"Id":2, "Name":"Material at site", "Desc":"Material at site"},
            {"Id":3, "Name":"Site build", "Desc":"Site build"},
            {"Id":4, "Name":"Commissioning & Integration", "Desc":"Commissioning & Integration"},
            {"Id":5, "Name":"Drive Test", "Desc":"Drive Test"},
            {"Id":6, "Name":"Acceptance Test", "Desc":"Acceptance Test"},
            {"Id":7, "Name":"Customer Handover", "Desc":"Customer Handover"},
        ]
    return data;    
}

export function fn_siteSurveyList(){
    const data =
        [
            {"Id":1, "Name":"Draft plan (sketch) of the equipment room layout", "Desc":"Site survey"},
            {"Id":2, "Name":"Relevant measurements (e.g. rooms, feeders, optical cables, power cables)", "Desc":"Material at site"},
            {"Id":3, "Name":"Availability of space on Tower top (for Radios, Antenna, Pole mount) and on tower bottom in the shelter / OD plinth (for DU, CU, Tx Equipment)", "Desc":"Site build"},
            {"Id":4, "Name":"Availability of Transmission ports, Power MCB", "Desc":"Commissioning & Integration"},
            {"Id":5, "Name":"AC/DC power, battery capacity and grounding requirements", "Desc":"Drive Test"},
            {"Id":6, "Name":"Technical Site Survey Report (TSSR)", "Desc":"Acceptance Test"},
            {"Id":7, "Name":"Technical Site Survey Report (TSSR)", "Desc":"Acceptance Test"},
            {"Id":8, "Name":"Technical Site Survey Report (TSSR)", "Desc":"Acceptance Test"},
            {"Id":9, "Name":"Technical Site Survey Report (TSSR)", "Desc":"Acceptance Test"}

        ]
    return data;
}