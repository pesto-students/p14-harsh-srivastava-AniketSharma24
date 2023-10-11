# Session: Intro to Web Fundamentals: Building the Foundation of Web Development

## 1. What is a protocol stack, and how is it used in web development?

* A Protocol Stack will consist of several layers which are involved while achieving a communication of a device with the Internet. Each layer in this protocol stack is responsible for specific task. Some of the layers that are part pf Protocol stack are mentioned below:

    * **Link Layer**:
        - As each devices over internet sends or receive data via achieving a wired/wireless connection. This layer handles the transmission of signals and issues related to physical connection.
    * **Network Layer**:
        - Communication between two directly connected device is easy to achieve but if we want to communicate with the device beyond direct connection, we need addressing protocols to identify the sender and receiver of data. IP address is used for this purpose. Each and every device over the internet have unique IP address.
    * **Transport Layer**:
        - In order to ensure faster delivery data over the internet is divided into small packets. The Transport Layer manages the reliable and orderly delivery of these packets. TCP (Transmission Control Protocol) ensures data is delivered accurately, while UDP (User Datagram Protocol) provides faster but less reliable communication.
    * **Application Layer**:
        - At the top layer, we find various protocols that cater to specific services and applications on the internet. Some examples include: HTTP (Hypertext Transfer Protocol), DNS (Domain Name System), and TLS (Transport Layer Security)

## 2. What are the different types of web servers, and how do they differ in terms of functionality and performance?

*  There are multiple types of servers which helps us to make our application available for all/ If we want to store specific information for our own access or to share it across the globe with others. Some of these servers are:

    - **Web Server**: This server helps tp store, process and deliver the web pages to the end user.
    - **DNS Server**: This server stores the mapping of IP Address and Domain Name. Whenever user type the URL, browser will check the DNS server to find its associated IP address and domain.
    - **File Server**: We can utilized this server to store files. This server is commonly used by drive.google.com.
    - **Email Server**: An email server, also called a mail server, is essentially a computer system that sends and receives emails. When you send an email, it goes through a series of servers to reach its final destination.
    - **Database Server**: This kind of server is used to store mostly text based information which later can be retrieved via query provided.
    - **Cloud Server**: A cloud server is a virtualized computing resource hosted in a remote data center, typically offered by a cloud service provider. It enables users to access and manage computing power, storage, and networking capabilities over the internet, allowing for scalable and flexible infrastructure without the need to invest in and maintain physical hardware.

## 3. What is web hosting, and what are the different types of hosting services available for websites?

* Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet. There are several types of hosting services:

    - **Shared Hosting**: Multiple websites share resources on the same server.
    - **VPS Hosting**: Virtual Private Servers offer dedicated resources within a shared environment.
    - **Dedicated Hosting**: Entire servers are dedicated to a single website or client.
    - **Cloud Hosting**: Hosting on a network of interconnected virtual servers for scalability.
    - **Managed Hosting**: Hosting optimized specifically for WordPress / Wix websites.

## 4. What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?

* Scaling is the process of adjusting the resources (e.g., servers, storage, or bandwidth) of a web application to accommodate changes in user traffic. It's vital for web applications to maintain performance and availability during traffic fluctuations.
    * Vertical scaling involves adding more power to a single server, while horizontal scaling adds more servers to distribute the load.
    * Vertical scaling is suitable for predictable traffic, while horizontal scaling is better for handling unpredictable and dynamic traffic patterns.

## 5. What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?

* SEO is a practice for improving the website's visibility in search engine results. There are several ways to optimize our website's visibility over search engine results.

    * **User Experience**: We need to ensure that iur website is user friendly and each and every part of it is accessible to end user.
    * **Page Speed**: Our website should be performant and should load quickly. The less is the loading time the better would be the user experience.
    * **Mobile Optimization**: Ensuring the website is responsive and mobile friendly.
    * **Quality Content**: Creating valuable, original, and engaging content.
    * **Keyword**: In order to inject the keywords in our website we need to know the purpose of that website and who all are the target audience. Afetr this we can identify the relevant keywords and integrate / inject them into our content.
    * **Semantic Tags**: We should use semantic tags like `<header>`, `<footer>`, `<nav>`, `<aside>`, `<section>`, `<article>` as it make it easier for assistive technologies like screen readers to understand and interpret web content, enhancing accessibility for individuals.
    * **Social Media**: We should also inject the social links of different platforms like facebook, twitter, linkedin, instagram to improve the SEO.

    There are many more factors that decides the ranking of our website over search engine result.
