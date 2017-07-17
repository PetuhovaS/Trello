angular.module('app').factory('cardFactory', function () {
    var servise = {};
    var cards = [
        {
            id: 1,
            description: 'Fix bug in player',
            list_id: 1
        },
        {
            id: 2,
            description: 'Add feature with D3',
            list_id: 2
        },
        {
            id: 3,
            description: 'Learn AngularJS',
            list_id: 3
        }
    ];
    servise.getCards = function (list) {
        return _.filter(cards, { list_id: list.id});
        
    };
    servise.createCard = function (list, cardDescription) {
        cards.push({
            id: _.uniqueId('card'),
            description: cardDescription,
            list_id: list.id
        });
        
    };
    return servise;
});