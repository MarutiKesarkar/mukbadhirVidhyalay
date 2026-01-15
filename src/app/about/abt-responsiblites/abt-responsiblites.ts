import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-abt-responsiblites',
  imports: [CommonModule],
  templateUrl: './abt-responsiblites.html',
  styleUrl: './abt-responsiblites.scss',
  standalone: true
})
export class AbtResponsiblites {
  items = [
    {
      title: 'प्रशस्त वर्ग खोल्या, सर्व सुविधायुक्त',
      description: 'विद्यार्थ्यांसाठी सुसज्ज व प्रशस्त वर्ग खोल्यांची सुविधा.',
      bgColor: '#f8f9ff',
      iconColor: '#1e3a8a', // dark blue
      icon: 'bi-easel-fill'
    },
    {
      title: 'मुला-मुलींसाठी निशुल्क निवास व्यवस्था',
      description: 'मुला व मुलींसाठी सुरक्षित आणि मोफत निवास व्यवस्था.',
      bgColor: '#f3f7f4',
      iconColor: '#166534', // dark green
      icon: 'bi-house-heart-fill'
    },
    {
      title: 'मुलींच्या सुरक्षेसाठी महिला कर्मचारी',
      description: 'मुलींच्या सुरक्षिततेसाठी विशेष प्रशिक्षित महिला कर्मचारी.',
      bgColor: '#fff6f0',
      iconColor: '#9a3412', // dark orange
      icon: 'bi-shield-lock-fill'
    },
    {
      title: 'बागेमध्ये भाजीपाला व फळझाडांची लागवड',
      description: 'पर्यावरणपूरक उपक्रमांतर्गत बाग व लागवड व्यवस्था.',
      bgColor: '#fdf4ff',
      iconColor: '#6b21a8', // dark purple
      icon: 'bi-tree-fill'
    },
    {
      title: 'मैदानी खेळासाठी प्रशस्त क्रीडांगण',
      description: 'विद्यार्थ्यांच्या शारीरिक विकासासाठी खेळाची सुविधा.',
      bgColor: '#fef9f2',
      iconColor: '#92400e', // dark amber
      icon: 'bi-dribbble'
    },
    {
      title: 'स्वतंत्र व स्वच्छता गृह',
      description: 'मुला व मुलींसाठी स्वतंत्र व स्वच्छ स्वच्छतागृहे.',
      bgColor: '#f1f5f9',
      iconColor: '#1e40af', // dark blue
      icon: 'bi-droplet-half'
    },
    {
      title: 'संगणक आधारित शिक्षण सुविधा',
      description: 'डिजिटल व संगणक आधारित आधुनिक शिक्षण पद्धती.',
      bgColor: '#f8f9ff',
      iconColor: '#1d4ed8', // dark indigo
      icon: 'bi-laptop-fill'
    },
    {
      title: 'RCC व सुगम्य इमारत',
      description: 'मजबूत RCC बांधकाम व सुलभ प्रवेशयोग्य इमारत.',
      bgColor: '#f3f7f4',
      iconColor: '#334155', // slate
      icon: 'bi-building'
    },
    {
      title: '२४ तास विजपुरवठा व इन्व्हर्टर बॅकअप',
      description: 'अखंड वीजपुरवठा आणि बॅकअपची व्यवस्था.',
      bgColor: '#fff6f0',
      iconColor: '#b45309', // dark yellow/orange
      icon: 'bi-lightning-charge-fill'
    },
    {
      title: 'स्वच्छ पिण्याचे पाणी (वॉटर फिल्टर)',
      description: 'शुद्ध व सुरक्षित पिण्याच्या पाण्याची सोय.',
      bgColor: '#fdf4ff',
      iconColor: '#0369a1', // dark cyan
      icon: 'bi-water'
    },
    {
      title: 'ऑडिओ व साउंड प्रूफ रूम',
      description: 'मुक्त अभिव्यक्तीसाठी आधुनिक ऑडिओ सुविधा.',
      bgColor: '#fef9f2',
      iconColor: '#7c2d12', // dark brown
      icon: 'bi-soundwave'
    },
    {
      title: 'मनोरंजन व खेळणी साहित्य',
      description: 'मुलांच्या मनोरंजनासाठी विविध खेळ व साहित्य.',
      bgColor: '#f1f5f9',
      iconColor: '#7c3aed', // violet
      icon: 'bi-emoji-smile-fill'
    },
    {
      title: 'वैयक्तिक मार्गदर्शन व प्रशिक्षण',
      description: 'प्रशिक्षित कर्मचाऱ्यांकडून वैयक्तिक शिक्षण.',
      bgColor: '#f8f9ff',
      iconColor: '#065f46', // dark teal
      icon: 'bi-person-check-fill'
    },
    {
      title: 'गरम पाण्याची अंघोळ व्यवस्था',
      description: 'हिवाळ्यासाठी गरम पाण्याची सोय.',
      bgColor: '#f3f7f4',
      iconColor: '#b91c1c', // dark red
      icon: 'bi-thermometer-half'
    },
    {
      title: 'कपडे धुण्यासाठी वॉशिंग मशीन',
      description: 'सर्व विद्यार्थ्यांसाठी कपडे धुण्याची सुविधा.',
      bgColor: '#fff6f0',
      iconColor: '#9f1239', // rose
      icon: 'bi-basket-fill'
    },
    {
      title: 'मोफत गणवेश व शैक्षणिक साहित्य',
      description: 'विद्यार्थ्यांना आवश्यक सर्व साहित्य मोफत.',
      bgColor: '#fdf4ff',
      iconColor: '#4c1d95', // deep purple
      icon: 'bi-book-fill'
    },
    {
      title: 'आरोग्य तपासणी व प्राथमिक उपचार',
      description: 'नियमित वैद्यकीय तपासणी व उपचार सुविधा.',
      bgColor: '#fef9f2',
      iconColor: '#991b1b', // medical red
      icon: 'bi-heart-pulse-fill'
    },
    {
      title: 'CCTV सुरक्षा व्यवस्था',
      description: 'संपूर्ण परिसरात CCTV द्वारे निगराणी.',
      bgColor: '#f1f5f9',
      iconColor: '#0f172a', // dark slate
      icon: 'bi-camera-video-fill'
    },
    {
      title: 'मोफत भोजन व नाश्ता',
      description: 'पौष्टिक व दर्जेदार भोजन व नाश्ता.',
      bgColor: '#f8f9ff',
      iconColor: '#854d0e', // warm brown
      icon: 'bi-cup-hot-fill'
    }
  ];


}
