import type { NextApiRequest, NextApiResponse } from 'next';

const mockData = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
  { id: 3, label: 'Cherry' },
  // Add more mock items
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.q?.toString().toLowerCase() || '';
  const filteredData = mockData.filter((item) => item.label.toLowerCase().includes(query));
  res.status(200).json(filteredData);
}