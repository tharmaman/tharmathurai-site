import React from 'react';
import Modal from 'react-responsive-modal';
import './OrderModal-module.css';

const OrderModal = ({ open, onClose }) => {
  const links = [
    {
      name: 'Amazon Canada 🇨🇦',
      url:
        'https://www.amazon.ca/Sadness-Geography-Life-Tamil-Exile/dp/1459745027/ref=sr_1_1?ie=UTF8&qid=1547341830&sr=8-1&keywords=the+sadness+of+geography',
    },
    {
      name: 'Indigo 🇨🇦',
      url:
        'https://www.chapters.indigo.ca/en-ca/books/the-sadness-of-geography-my/9781459745025-item.html?ref=item_page%3avariation',
    },
    {
      name: 'Amazon USA 🇺🇸',
      url:
        'https://www.amazon.com/Sadness-Geography-Life-Tamil-Exile/dp/1459745027/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1547341947&sr=8-1',
    },
    {
      name: "Powell's Books 🇺🇸",
      url: 'https://www.powells.com/book/-9781459745025',
    },
    {
      name: 'Barnes & Noble 🇺🇸',
      url:
        'https://www.barnesandnoble.com/w/the-sadness-of-geography-logathasan-tharmathurai/1129710514?ean=9781459745025',
    },
    {
      name: 'Amazon India 🇮🇳',
      url:
        'https://www.amazon.in/Sadness-Geography-Life-Tamil-Exile-ebook/dp/B07J2J2NHG/ref=sr_1_1?ie=UTF8&qid=1547406815&sr=8-1&keywords=the+sadness+of+geography',
    },
    {
      name: 'Amazon Germany 🇩🇪',
      url:
        'https://www.amazon.de/Sadness-Geography-Tamil-Exile-English-ebook/dp/B07J2J2NHG/ref=sr_1_1?ie=UTF8&qid=1547406991&sr=8-1&keywords=the+sadness+of+geography',
    },
    {
      name: 'Amazon France 🇫🇷',
      url:
        'https://www.amazon.fr/Sadness-Geography-Tamil-Exile-English-ebook/dp/B07J2J2NHG/ref=sr_1_1?ie=UTF8&qid=1547406991&sr=8-1&keywords=the+sadness+of+geography',
    },
    {
      name: 'Amazon UK 🇬🇧',
      url:
        'https://www.amazon.co.uk/Sadness-Geography-Life-Tamil-Exile-ebook/dp/B07J2J2NHG/ref=sr_1_1?ie=UTF8&qid=1547405627&sr=8-1&keywords=the+sadness+of+geography',
    },
    {
      name: 'Amazon Australia 🇦🇺',
      url:
        'https://www.amazon.com.au/Sadness-Geography-Life-Tamil-Exile-ebook/dp/B07J2J2NHG/ref=sr_1_1?ie=UTF8&qid=1547406561&sr=8-1&keywords=the+sadness+of+geography',
    },
  ];

  const renderLinks = links.map(link => {
    return (
      <li>
        <a className='.order-link' href={link.url} target="_blank" rel="noopener noreferrer">
          {link.name}
        </a>
      </li>
    );
  });

  return (
    <Modal open={open} onClose={() => onClose()} classNames="order-modal" center>
      <br />
      <ul style={{ listStyle: 'none' }}>{renderLinks}</ul>
    </Modal>
  );
};

export default OrderModal;
