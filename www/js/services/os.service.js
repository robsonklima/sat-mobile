app.factory("osService", function($http, constants) {

    var _find = function() {
        return [{ 
                    id: 7,
                    order: 7, 
                    local: 'Campinas',
                    os: '5289541', 
                    address: 'Av. Dr. Moraes Sales, 2349 - Nova Campinas, Campinas - SP, 13092-111', 
                    marker_color: 'grn', 
                    sla_limite: '12-01-2017 13:03',
                    sla_status: 'Dentro do Prazo',
                    intervencao: "Corretiva"
                },
                { 
                    id: 2,
                    order: 2, 
                    local: 'Jardim Estela',
                    os: '5284581', 
                    address: 'R. Avaré, 1-319 - Jardim Estela, Poá - SP, 08563-130', 
                    marker_color: 'red', 
                    sla_limite: '07-01-2017 13:03',
                    sla_status: 'Fora do Prazo',
                    intervencao: "Corretiva"
                },
                { 
                    id: 3,
                    order: 3, 
                    local: 'Barueri',
                    os: '5285695', 
                    address: 'Estr. Velha de Itapevi, 968-1602 - Vila Militar, Barueri - SP', 
                    marker_color: 'ylw', 
                    sla_limite: '11-01-2017 11:03',
                    sla_status: 'Próximo do Prazo',
                    intervencao: "Corretiva"
                },
                { 
                    id: 4,
                    order: 4, 
                    local: 'São Vicente',
                    os: '5282157', 
                    address: 'Av. Papa João XXIII, 2001-2163 - Parque Sao Vicente, Mauá - SP', 
                    marker_color: 'ylw', 
                    sla_limite: '06-01-2017 17:45',
                    sla_status: 'Próximo do Prazo',
                    intervencao: "Inspeção Técnica"
                },
                { 
                    id: 5,
                    order: 5, 
                    local: 'Jardim Independência',
                    os: '5289364', 
                    address: 'Av. Secondino, 210-246 - Jardim Independencia, São Paulo - SP, 03225-040', 
                    marker_color: 'ylw', 
                    sla_limite: '01-01-2017 13:03',
                    sla_status: 'Próximo do Prazo',
                    intervencao: "Corretiva"
                },
                { 
                    id: 6,
                    order: 6, 
                    local: 'Mogi das Cruzes',
                    os: '5289128', 
                    address: 'Rod. Ayrton Senna, Mogi das Cruzes - SP', 
                    marker_color: 'ylw', 
                    sla_limite: '12-01-2017 13:03',
                    sla_status: 'Próximo do Prazo',
                    intervencao: "Alteração de Engenharia"
                },
                { 
                    id: 1,
                    order: 1, 
                    local: 'Vila Denise',
                    os: '5289128', 
                    address: 'Vila Denise, Jacareí - SP, 12307-460', 
                    marker_color: 'red', 
                    sla_limite: '09-01-2017 13:03',
                    sla_status: 'Fora do Prazo',
                    intervencao: "Corretiva"
                },
                { 
                    id: 8,
                    order: 8, 
                    local: 'São José C.',
                    os: '5289128', 
                    address: 'R. Francisco Paes, 214 - Centro, São José dos Campos - SP, 12210-10', 
                    marker_color: 'grn', 
                    sla_limite: '12-01-2017 13:03',
                    sla_status: 'Dentro do Prazo',
                    intervencao: "Instalação"
                },
                { 
                    id: 9,
                    order: 9, 
                    local: 'Shopping Alameda',
                    os: '5588515', 
                    address: 'Alameda Rio Negro, 111 - Alphaville, Barueri - SP, 06454-000', 
                    marker_color: 'grn', 
                    sla_limite: '05-01-2017 13:03',
                    sla_status: 'Dentro do Prazo',
                    intervencao: "Corretiva"
                },
                { 
                    id: 10,
                    order: 10, 
                    local: 'Alameda Araguaia',
                    os: '5894548', 
                    address: 'Alameda Araguaia, 2751 - Alphaville Industrial, Barueri - SP, 06455-000', 
                    marker_color: 'grn', 
                    sla_limite: '05-01-2017 13:03',
                    sla_status: 'Dentro do Prazo',
                    intervencao: "Alteração de Engenharia"
                },
                { 
                    id: 11,
                    order: 11, 
                    local: 'Mairiporã',
                    os: '5899415', 
                    address: 'Av. Tab. Passarela, 565, Mairiporã - SP, 07600-000', 
                    marker_color: 'grn', 
                    sla_limite: '05-01-2017 13:03',
                    sla_status: 'Dentro do Prazo',
                    intervencao: "Instalação"
                }];    
    }

    return { find: _find };
});
