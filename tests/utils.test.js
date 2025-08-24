describe('Utility Functions', function() {
    describe('LocalStorage Simulation', function() {
        let mockStorage;

        beforeEach(function() {
            mockStorage = {};
            // Mock localStorage for testing
            global.localStorage = {
                setItem: function(key, value) {
                    mockStorage[key] = value;
                },
                getItem: function(key) {
                    return mockStorage[key] || null;
                },
                removeItem: function(key) {
                    delete mockStorage[key];
                }
            };
        });

        it('should save and load configuration', function() {
            const config = {
                host: '192.168.1.100',
                port: '1234',
                maxTokens: 1024,
                temperature: 0.5
            };

            localStorage.setItem('lmstudio-config', JSON.stringify(config));
            const loaded = JSON.parse(localStorage.getItem('lmstudio-config'));

            expect(loaded).to.deep.equal(config);
        });

        it('should save and load selected model', function() {
            const modelId = 'qwen/qwen3-coder-30b';
            
            localStorage.setItem('lmstudio-selected-model', modelId);
            const loaded = localStorage.getItem('lmstudio-selected-model');

            expect(loaded).to.equal(modelId);
        });

        it('should handle missing data gracefully', function() {
            const missing = localStorage.getItem('non-existent-key');
            expect(missing).to.be.null;
        });
    });

    describe('Text Processing', function() {
        it('should clean text content properly', function() {
            const text = '  Multiple   spaces   and\n\nline breaks  ';
            const cleaned = text.replace(/\n\s*\n/g, '\n').trim();
            
            expect(cleaned).to.equal('Multiple   spaces   and\nline breaks');
        });

        it('should handle empty strings', function() {
            const empty = '';
            const trimmed = empty.trim();
            
            expect(trimmed).to.equal('');
        });
    });

    describe('URL Validation', function() {
        function isValidUrl(host, port) {
            const urlPattern = /^[a-zA-Z0-9.-]+$/;
            const portNum = parseInt(port);
            
            return urlPattern.test(host) && 
                   portNum > 0 && 
                   portNum <= 65535;
        }

        it('should validate correct host and port', function() {
            expect(isValidUrl('192.168.31.100', '1234')).to.be.true;
            expect(isValidUrl('localhost', '8080')).to.be.true;
            expect(isValidUrl('api.example.com', '443')).to.be.true;
        });

        it('should reject invalid inputs', function() {
            expect(isValidUrl('', '1234')).to.be.false;
            expect(isValidUrl('192.168.1.1', '0')).to.be.false;
            expect(isValidUrl('192.168.1.1', '70000')).to.be.false;
            expect(isValidUrl('invalid_host!', '1234')).to.be.false;
        });
    });
});