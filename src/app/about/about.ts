import { Component } from '@angular/core';
import { AbtResponsiblites } from "./abt-responsiblites/abt-responsiblites";
import { AbtApproach } from "./abt-approach/abt-approach";
import { Members } from "./members/members";

@Component({
  selector: 'app-about',
  imports: [AbtResponsiblites, AbtApproach, Members],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true
})
export class About {

 features = [
  {
    title: 'अनुभवी व प्रशिक्षित शिक्षक',
    text: 'शाळेत अनुभवी व सहानुभूतीपूर्ण शिक्षक कार्यरत असून प्रत्येक विद्यार्थ्याकडे वैयक्तिक लक्ष दिले जाते.',
    icon: 'bi-mortarboard-fill',
    bg: 'bg-primary-subtle',
    color: 'text-primary'
  },
  {
    title: 'संवाद कौशल्यांचा विकास',
    text: 'संवाद विकासासाठी नियोजित सराव, सांकेतिक भाषा व श्रवण प्रशिक्षण दिले जाते.',
    icon: 'bi-chat-dots-fill',
    bg: 'bg-success-subtle',
    color: 'text-success'
  },
  {
    title: 'पूर्ण निवासी शिक्षण व्यवस्था',
    text: 'सुरक्षित निवास, पौष्टिक आहार व नियमित दिनचर्या यांसह सर्वांगीण विकास.',
    icon: 'bi-house-heart-fill',
    bg: 'bg-warning-subtle',
    color: 'text-warning'
  },
  {
    title: 'सुरक्षित व बालस्नेही परिसर',
    text: 'निवासी परिसर सुरक्षित, स्वच्छ व मुलांसाठी पूर्णतः अनुकूल आहे.',
    icon: 'bi-shield-check',
    bg: 'bg-info-subtle',
    color: 'text-info'
  },
  {
    title: 'शासनमान्य निवासी संस्था',
    text: '1985 पासून शासनमान्य संस्था म्हणून नियमांनुसार गुणवत्तापूर्ण सेवा.',
    icon: 'bi-patch-check-fill',
    bg: 'bg-secondary-subtle',
    color: 'text-secondary'
  },
  {
    title: 'पालक व शाळा संवाद',
    text: 'पालकांशी नियमित संवाद ठेवून विद्यार्थ्यांच्या प्रगतीची माहिती दिली जाते.',
    icon: 'bi-people-fill',
    bg: 'bg-danger-subtle',
    color: 'text-danger'
  }
];

}
