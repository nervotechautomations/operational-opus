const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-lg tracking-tight">
            <span className="font-mono text-accent">▲</span> Nexus<span className="text-muted-foreground font-normal">AI</span>
          </div>
          <div className="flex gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#industries" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Industries</a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</a>
            <a href="#integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</a>
          </div>
          <p className="text-xs text-muted-foreground font-mono">© 2026 NexusAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
