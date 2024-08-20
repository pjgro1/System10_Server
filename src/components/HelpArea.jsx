import HelpBox from './HelpBox';
import './HelpArea.css';

const HELP_ITEMS = [
  {
    id: 'h1',
    title: 'What is Plutora?',
    text: 'Plutora is a Release and Environments Management toolset',
  },
  {
    id: 'h2',
    title: 'What is Plutora?',
    text: 'Plutora is a SaaS product for release and environment management',
  },
  {
    id: 'h3',
    title: 'What is Plutora Analytics',
    text: 'Plutora Analytics is the embedded Tableau reporting system',
  },
];

function HelpArea() {
  // TODO: Keeping this single threaded won't scale +bug
  return (
    <section data-testid="help-area" id="help-area">
      {HELP_ITEMS.map((item) => (
        <HelpBox key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
}

export default HelpArea;
