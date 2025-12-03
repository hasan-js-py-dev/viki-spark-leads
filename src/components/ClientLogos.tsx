import { motion } from 'framer-motion';

const clients = [
  { name: 'Salesforce', logo: 'SF' },
  { name: 'HubSpot', logo: 'HS' },
  { name: 'Stripe', logo: 'ST' },
  { name: 'Shopify', logo: 'SH' },
  { name: 'Slack', logo: 'SL' },
  { name: 'Zoom', logo: 'ZM' },
  { name: 'Dropbox', logo: 'DB' },
  { name: 'Mailchimp', logo: 'MC' },
];

const ClientLogos = () => {
  return (
    <section className="py-12 border-y border-border/30 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider"
        >
          Trusted by leading companies worldwide
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center font-heading font-bold text-sm">
                {client.logo}
              </div>
              <span className="font-heading font-semibold text-sm hidden sm:block">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
