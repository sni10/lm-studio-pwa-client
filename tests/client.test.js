describe('LMStudioClient', function() {
    let client;

    beforeEach(function() {
        client = new LMStudioClientTest();
    });

    describe('Configuration', function() {
        it('should initialize with default config', function() {
            expect(client.config.host).to.equal('192.168.31.100');
            expect(client.config.port).to.equal('1234');
            expect(client.config.maxTokens).to.equal(2048);
            expect(client.config.temperature).to.equal(0.7);
        });

        it('should start disconnected', function() {
            expect(client.isConnected).to.be.false;
        });

        it('should initialize empty messages array', function() {
            expect(client.messages).to.be.an('array').that.is.empty;
        });
    });

    describe('Statistics', function() {
        it('should initialize with zero stats', function() {
            expect(client.conversationStats.messages).to.equal(0);
            expect(client.conversationStats.tokens).to.equal(0);
        });

        it('should format stats correctly', function() {
            client.conversationStats.messages = 5;
            client.conversationStats.tokens = 150;
            
            const stats = client.updateStats();
            expect(stats).to.equal('Сообщений: 5, Токенов: 150');
        });
    });

    describe('Token Estimation', function() {
        it('should estimate tokens correctly', function() {
            const shortText = 'Hello';
            const longText = 'This is a longer text that should have more tokens';
            
            expect(client.estimateTokens(shortText)).to.equal(2); // 5/4 = 1.25 -> 2
            expect(client.estimateTokens(longText)).to.equal(13); // 51/4 = 12.75 -> 13
        });

        it('should handle empty text', function() {
            expect(client.estimateTokens('')).to.equal(0);
        });
    });

    describe('Markdown Rendering', function() {
        it('should render bold text', function() {
            const result = client.renderMarkdown('**bold text**');
            expect(result).to.equal('<strong>bold text</strong>');
        });

        it('should render italic text', function() {
            const result = client.renderMarkdown('*italic text*');
            expect(result).to.equal('<em>italic text</em>');
        });

        it('should render code text', function() {
            const result = client.renderMarkdown('`code text`');
            expect(result).to.equal('<code>code text</code>');
        });

        it('should render line breaks', function() {
            const result = client.renderMarkdown('line 1\nline 2');
            expect(result).to.equal('line 1<br>line 2');
        });

        it('should handle mixed formatting', function() {
            const result = client.renderMarkdown('**bold** and *italic* and `code`');
            expect(result).to.equal('<strong>bold</strong> and <em>italic</em> and <code>code</code>');
        });
    });
});