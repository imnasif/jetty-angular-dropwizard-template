describe("BookService Tests", function () {
    
    var bookService, $httpBackend;
    
    beforeEach(function () {
        module('demo-app');
        inject(function ($injector) {
            bookService = $injector.get('BookService');
            $httpBackend = $injector.get('$httpBackend');
        });
    });
    
    describe("Test", function(){
        it("tests if runner is running", function(){
            expect(1+1).toBe(2);
        });
    });
    
    
});