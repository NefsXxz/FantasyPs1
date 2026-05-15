// api/download.js
export default async function handler(req, res) => {
  // URL raw file host.txt dari GitHub (pastikan public)
  const fileUrl = 'https://raw.githubusercontent.com/NefsXxz/FantasyPs1/refs/heads/main/host.txt';

  try {
    const response = await fetch(fileUrl);
    if (!response.ok) throw new Error('Gagal mengambil host.txt');
    const content = await response.text();

    // Header untuk memaksa download
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="EldoriaPs-Hosts.txt"');
    res.status(200).send(content);
  } catch (error) {
    console.error(error);
    res.status(500).send('Gagal mengambil file host. Silakan coba lagi nanti.');
  }
};
