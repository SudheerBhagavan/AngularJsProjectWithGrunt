app.controller('MainController',['$scope',function($scope){
  $scope.title='Top Sellers in Books';
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'images/the-book-of-trees.jpg',
      likes: 0 ,
      dislikes: 0
    },
    {
      name: '3 Mistakes Of My Life',
      price: 69,
      pubdate: new Date('2015', '07', '06') ,
      cover: 'images/3-mistakes-of-my-life-Chetan-Bhagat.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Five Point Someone',
      price: 28,
      pubdate: new Date('2016', '05', '02'),
      cover: 'images/five-point-someone-by-Chetan-Bhagat.jpg' ,
      likes: 0,
      dislikes: 0
    }
  ];
  $scope.plusOne =  function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne =  function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);
