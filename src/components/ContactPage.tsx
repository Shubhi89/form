import Button from './Button'
import footer from '../assets/footer.png'
import { Facebook, Twitter, Send, Linkedin } from 'lucide-react'

const ContactPage = () => {
  return (
    <>
       <div className="flex flex-col items-center justify-center pb-12">
        <img
          src={footer}
          alt="Health Desk Footer Logo"
          className="h-42 w-auto object-contain"
        />
        <Button variant="outline" className="rounded-none px-10 h-10">
          Follow Us
        </Button>
        <div className="max-w-4xl mx-auto text-center px-4 mb-16">
          <div className="flex justify-center gap-4 mt-10">
            <Button variant="primary" className="rounded-full px-3! py-3!">
              <Facebook size={20} />
            </Button>
            <Button variant="primary" className="rounded-full px-3! py-3!">
              <Twitter size={20} />
            </Button>
            <Button variant="primary" className="rounded-full px-3! py-3!">
              <Send size={20} />
            </Button>
            <Button variant="primary" className="rounded-full px-3! py-3!">
              <Linkedin size={20} />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage