import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time className='text-slate-600 text-sm/tight' dateTime='2025-04-20'>
            20/04/2025 10:00
          </time>
          <PostHeading as='h1' url='#'>
            Lorem, ipsum dolor sit amet consectetur
          </PostHeading>
          <p>
            {' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            architecto minus blanditiis harum excepturi delectus libero velit
            odio recusandae saepe impedit aut natus necessitatibus quos,
            reprehenderit consectetur deleniti temporibus quibusdam. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </section>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>FOOTER</p>
      </footer>
    </Container>
  );
}
