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

export function fn_ohsChecklist(){
    const data =
        [
            {"Id":1, "Name":"Valid Aadhar card number of technicians/ engineers registered with HFCL", "Desc":"Site survey"},
            {"Id":2, "Name":"EN Standard Safety Shoes , Helmet, Full body safety harness, Material lifting kit", "Desc":"Material at site"},
            {"Id":3, "Name":"Reflector jacket", "Desc":"Site build"},
            {"Id":4, "Name":"Covid PPE Kit", "Desc":"Commissioning & Integration"},
            {"Id":5, "Name":"Valid Farm ToCli – work at height certificate", "Desc":"Drive Test"},
            {"Id":6, "Name":"Tool Kit", "Desc":"Acceptance Test"},
            {"Id":7, "Name":"First Aid Kit", "Desc":"Acceptance Test"},
            {"Id":8, "Name":"Thick Vegetation at site", "Desc":"Acceptance Test"},
            {"Id":9, "Name":"Water logging at site", "Desc":"Acceptance Test"},
            {"Id":10, "Name":"Overhead High tension electrical wire", "Desc":"Acceptance Test"},
            {"Id":11, "Name":"Rooftop not safe to work", "Desc":"Acceptance Test"}

        ]
    return data;
}


export function fn_checkinList(){
    const data =
        [
            {"Id":1, "Date":"17/8/2022", "Checkin":"8:30", "Checkout":""},
            {"Id":2, "Date":"16/8/2022", "Checkin":"8:30", "Checkout":"17:30"},
            {"Id":3, "Date":"15/8/2022", "Checkin":"9:00", "Checkout":"19:30"},
            {"Id":1, "Date":"14/8/2022", "Checkin":"8:30", "Checkout":""},
            {"Id":2, "Date":"13/8/2022", "Checkin":"8:30", "Checkout":"17:30"},
            {"Id":3, "Date":"12/8/2022", "Checkin":"9:00", "Checkout":"19:30"},

        ]
    return data;
}