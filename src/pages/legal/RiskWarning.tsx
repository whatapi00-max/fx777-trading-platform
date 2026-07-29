import PageLayout from '../../components/Layout/PageLayout'

const RiskWarning = () => {
  return (
    <PageLayout
      title="Risk Warning"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Legal' }, { name: 'Risk Warning' }]}
      description="Important risk disclosure information for FX777 trading platform."
    >
      <div className="space-y-8">
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Last updated: January 1, 2026.</strong> Please read this Risk Warning carefully before trading on the FX777 platform.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-8 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-dark-900 mb-4">1. General Provisions</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>1.1. Before registering on the Company's website, the Client (potential Client) is obligated to study this Risk Disclosure agreement.</p>
              <p>1.2. The registration of the Client on the Company's website, in the trading terminal, as well as any intention to conduct operations on the trading platform, is the basis to believe that the Client has fully studied and agreed to the provisions of this Risk Disclosure agreement.</p>
              <p>1.3. The Risk Disclosure agreement is an integral part of the Service Agreement.</p>
              <p>1.4. It is hereby determined that the Client's consent to the terms of the Service Agreement is at the same time consent to all the provisions of the Risk Disclosure agreement.</p>
              <p>1.5. The Client acknowledges and accepts that the list of risks reflected in this agreement is not closed due to the great variability of possible events in the financial market.</p>
              <p>1.6. The Risk Disclosure agreement is for guidance only.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-900 mb-4">2. Purpose of the Risk Disclosure</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">The objectives of this Risk Disclosure agreement are:</p>
            <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <li>• 2.1.1. inform the Client as much as possible about the possible risks associated with transactions in the financial markets;</li>
              <li>• 2.1.2. warn the Client about the risks associated with working with derivatives;</li>
              <li>• 2.1.3. disclose to the Client information about the possibility of receiving a loss as a result of trading in derivative financial instruments.</li>
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">2.1.4. The company recommends that the Client, when carrying out any operations on the market, correlate the possible risks from such operations with the goals, and most importantly with the financial capabilities of the client.</p>
            <p className="text-gray-600 text-sm leading-relaxed">2.1.5. In the framework of this Risk Disclosure, the Company does not urge the Client to refuse to perform transactions with derivative financial instruments, but is trying to help the Client understand possible risks and responsibly approach the issue of concluding an agreement with the Company by choosing the right strategy for concluding transactions on financial risks.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-900 mb-4">3. Risk Types</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-3">3.1. Trading risks - risks associated with the trading process:</h3>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>• 3.1.1. Instability of the financial market (including a sharp change in the price of the underlying asset);</li>
                <li>• 3.1.2. The client must be aware that various economic events can lead to sharp changes in the value of assets. When such an event occurs when the market closes, when it opens, the price of the underlying asset can differ enormously from the price that was when the market was closed. In addition, the Client may lose the opportunity to close an open transaction at a favorable price for him. Such cases can lead to both weight loss and significant profit.</li>
                <li>• 3.1.3. Market volatility;</li>
                <li>• 3.1.4. There are always changes in the open market. The more dynamic the market, the higher the rate of change in the price of a financial instrument, respectively, the greater profit you can get. It should be understood that highly volatile assets are characterized not only by a high rate of earnings on them, but are also more risky in terms of loss of capital.</li>
                <li>• 3.1.5. Liquidity of financial instruments;</li>
                <li>• 3.1.6. The value of assets is affected by a huge number of factors, ranging from the ratio of supply and demand for them, ending with events of an economic, political nature, on a national or international scale. The client must adapt to constantly changing market conditions and understand that there is always the possibility of not receiving the planned profit for one reason or another.</li>
                <li>• 3.1.7. The client understands and acknowledges that the time to process his application (order) in unstable market conditions (conditions other than normal) always increases. Moreover, in the request queue on the Company's server there can be delays.</li>
                <li>• 3.1.8. The client is aware that a derivative financial instrument, i.e. its price is derived from the price of the underlying asset to which it is tied.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-3">3.2. Non-trading risks - risks associated with external working conditions:</h3>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>• 3.2.1. Interruptions in work or complete blackout of electricity, equipment from the Client or telecom operator;</li>
                <li>• 3.2.2. Use by the Client of such communication channels, software or equipment that are associated with the risk of not receiving (untimely receipt) of messages from the Company;</li>
                <li>• 3.2.3. Complete disconnection of the Client's communication channels (physical destruction), which led to a lack of communication between the Client's provider, the service provider and the Company's server;</li>
                <li>• 3.2.4. Poor quality of transmission over communication channels used by the Client, or channels used by the communication provider, which in turn is used by the Client;</li>
                <li>• 3.2.5. Improper operation of the equipment of the Client;</li>
                <li>• 3.2.6. Disconnection of communication channels used by the Company, in particular as a result of their destruction (damage) by third parties;</li>
                <li>• 3.2.7. Actions or omissions of third parties, incl. malicious, which led or may lead to malfunctions (complete shutdown) of electrical systems, communication systems, information, etc.;</li>
                <li>• 3.2.8. The Client hereby accepts that the activity on the derivatives market directly depends on the operation of the Internet network, therefore, there is always a risk of interruptions in the functioning or complete disconnection of communication channels, equipment, software, which in turn can lead to non-fulfillment of the Client's request on time and in accordance with his instructions. The company is not liable in the event of such a refusal to perform;</li>
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                The client understands that as a result of interruptions in the operation of the Internet network (including, but not limited to, malfunctions in the software, hardware connection, hacker attacks, etc.) or its complete absence, access to the trading terminal, the web page and server of the Company will be closed. The Company is not liable for any losses (lost profits, other expenses, etc.) of the Client resulting from events during which the Client did not gain access to the trading terminal (website, server), and the Client's request was not executed. The Client accepts that such events of the Company are not controlled.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                The client assumes any risks (including financial) associated with failures in the network, software, communications, equipment, etc.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                The client is aware of the risk of loss from the transaction, financial loss upon occurrence of force majeure circumstances, which include extraordinary and unavoidable circumstances under the given conditions, including but not limited to: wars, floods, fires, earthquakes and other natural disasters, strikes, terrorist acts, mass unrest, riots, changes in the current legislation, interruptions in the operation of software, electrical networks, instability of the flow of quotes and so on, which, according to the Company, led or could lead to a change in market conditions in relation to financial instruments (assets) and prevented the proper fulfillment of obligations; closing of any market on the basis of which the Company builds quotes, its liquidation or suspension of activity, the introduction of special restrictions on such a market, certain conditions, as well as the occurrence or non-occurrence of an event within such a market;
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-3">3.3. Information and Analysis</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The Company has the right to provide the Client with various kinds of information, including analytical, news, financial and other information about the market, as well as give your comments and recommendations on market conditions (hereinafter - the Information). At the same time, the Client is aware that:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>• 3.3.1. such Information is provided by the Company for information only, the Company is not responsible for such Information and does not give any guarantees about its relevance, accuracy and correctness;</li>
                <li>• 3.3.2. such Information is for informational purposes only and is not a direct recommendation for action or advice to the Client;</li>
                <li>• 3.3.3. any decision regarding the Client's investments or operations performed by him is entirely the responsibility of the Client and in no way depends on the Company Information;</li>
                <li>• 3.3.4. in case the Information has restrictions in relation to a certain person or category of persons, the Client shall not disseminate such Information to such a person or category of persons;</li>
                <li>• 3.3.5. independently determines to use or not to use such Information when making decisions. At the same time, the Company does not guarantee that upon receipt of Information by the Client, it will remain relevant;</li>
                <li>• 3.3.6. The Company has the right at any time at its sole discretion to edit or delete the Information without prior notice to the Client.</li>
                <li>• 3.3.7. The Company will not advise the Client on the profitability of the transaction, give forecasts on open positions or recommendations on investment decisions.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-3">3.4. Quotes and Server Information</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Client acknowledges that the Company's server is the only reliable source of information on current quotes. The quotes reflected in the Client's trading terminal are not reliable due to a possible unstable connection between the Client's trading terminal and the Company's server, as a result of which part of the asset prices may not reach the trading terminal.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-3">3.5. Client Responsibilities</h3>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>• 3.5. All losses, including and financial, associated with the non-receipt by the Client of a message from the Company or with a delay in receipt, are the responsibility of the Client.</li>
                <li>• 3.6. The risk of repeated operations if the Client did not wait for confirmation of the status of the transaction according to the previous order and sent a new one is the responsibility of the Client.</li>
                <li>• 3.7. The Client acknowledges that the information received and / or sent by e-mail in unencrypted form is not protected from unauthorized access to it by third parties.</li>
                <li>• 3.8. Closing the web browser window by the Client does not cancel the order or request that has already been sent to them for processing.</li>
                <li>• 3.9. The client is solely responsible for maintaining all confidential information related to his trading operations. Any financial losses of the Client, including with unauthorized access to the Client's trading terminal (Individual Account) of third parties, are the Client's responsibility.</li>
                <li>• 3.10. The Company is not responsible for unauthorized access of third parties to the personal data of the Client, email addresses, the contents of letters, access data, etc., which occurred or could have occurred as a result of the transfer of such information between the Company and any other party via the Internet connection, telephone or electronic means.</li>
                <li>• 3.11. The Client assumes all responsibility for possible financial and other losses (risks) if the execution of operations is not possible in the event of the introduction of legislative restrictions by the Client's country of residence.</li>
                <li>• 3.12. The Company does not guarantee that transactions related to the turnover of derivative financial instruments are not or will not be subject to taxation. The Company does not provide legal, financial and other advice on Client transactions. The client undertakes to independently seek qualified assistance if he has questions or doubts regarding tax obligations. The client is responsible for paying any fees (including tax) for transactions made by him.</li>
                <li>• 3.13. If the Client's funds for replenishment of the Account (withdrawal from the Account) pass through third parties, the Company shall not be liable for the actions and / or inaction of such persons.</li>
                <li>• 3.14. By subscribing to the Company's Trading Signals, the Client understands and accepts that the Trading Signals are not an offer, a direct indication (recommendation) to the Client to conclude a operation or professional advice. Moreover, the Company does not guarantee that Trading signals represent true, accurate and current information. The Company is not liable to the Client or third parties for either the Trading signals themselves or for decisions made on their basis.</li>
                <li>• 3.15. By sending a Company Application for a operation, the Client completely gives a report to his actions, evaluating the opportunities and losses.</li>
                <li>• 3.16. The client chooses his own trading strategy and takes specific actions, relying either on his personal knowledge and understanding of the market, or on the opinions of professional experts independent in this field and not affiliated with the Company.</li>
                <li>• 3.17. Any decision of the Client on the site of the financial market is the responsibility of the Client.</li>
                <li>• 3.18. The client understands that the activity in the market of derivative financial instruments is speculative, which means it carries risks and is suitable only for those people who are aware and willing to take on financial, legal and other risks. In addition, such persons have sufficient knowledge and are prepared for the loss of invested amounts, taking into account their life (financial) situation.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  )
}

export default RiskWarning
