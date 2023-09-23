import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { Analytics } from '@vercel/analytics/react'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/social-icons'
import portraitImage from '../public/static/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className="flex">
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  const { author, email, linkedin, github } = siteMetadata
  return (
    <>
      <Head>
        <title>{`About - ${author}`}</title>
        <meta
          name="description"
          content="Hi, I'm Dao Khoi Nguyen. I'm a software engineer and a lifelong learner. I'm passionate about building great software and sharing what I learn along the way."
        />
      </Head>
      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="portrait of Dao Khoi Nguyen"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Dao Khoi Nguyen. I live in Ha Noi, Viet Nam.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
              <p style={{marginBottom: '10px'}}>Meet <span style={{ fontWeight: 'bold' }}>Đào Khôi Nguyên</span>, a dude from <span style={{ fontWeight: 'bold' }}>Hanoi</span>, a city that doesn't rain like Vancouver but is sunny enough to melt my ice cream every time I try to dash outside for a treat. As a kiddo, instead of dismantling toys (and facing the wrath of mom for failing to put them back together), I found myself utterly smitten by <span style={{textDecoration: 'underline'}}>technology</span>. With <span style={{ fontWeight: 'bold' }}>7 years</span> in software and another <span style={{ fontWeight: 'bold' }}>4 diving deep into Digital Marketing</span>, I'm currently the "Tech Manager" of the technical room at <span style={{ fontWeight: 'bold' }}>Novaon Digital</span>. </p>
              <p style={{marginBottom: '10px'}}>Mention <span style={{fontWeight: 'bold', fontStyle: 'italic'}}>technical</span>, and my spirit just lights up! Living life with zest and an insatiable curiosity, I’m on an endless journey of researching and integrating nifty tech like <span style={{ fontWeight: 'bold' }}>.net core, angular, redis</span>, and the squad of <span style={{ fontWeight: 'bold' }}>SQLServer, elasticsearch, nodejs, python, ubuntu, and the macbook pro M1</span> into our products and services. After wrapping up each project, I often ponder, "Hey Khôi Nguyên, ever thought about becoming a <span style={{textDecoration: 'underline'}}>mentor</span>?" </p>
              <p>And the answer is always a resounding: "Absolutely!" I aspire to be a guide in the <span style={{ fontWeight: 'bold' }}>tech</span> and <span style={{ fontWeight: 'bold' }}>programming</span> realm, aiding the younglings so they don't have to face the same bumps and hiccups I did when starting out. And... perhaps also to occasionally show off a tad about all the cool stuff I know! 😂😉 </p>
            </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                curtis.gwarcup@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <Analytics />
    </>
  )
}
