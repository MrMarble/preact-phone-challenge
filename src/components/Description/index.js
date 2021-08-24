export const Description = ({ phone }) => (
  <article>
    <span class="uppercase font-bold text-lg text-gray-700">{phone.brand}</span>
    <span class="uppercase font-bold ml-3 text-lg text-gray-700">
      {phone.price}€
    </span>
    <h2 class="text-4xl font-bold mb-5">{phone.model}</h2>
    <ul class="list-none text-lg">
      {["cpu", "ram", "os"].map((key) => (
        <li key={key}>
          <b class="uppercase mr-2">{key}:</b>
          {phone[key]}
        </li>
      ))}
      {["battery", "dimentions", "weight"].map(
        (key) =>
          phone[key] && (
            <li key={key}>
              <b class="capitalize mr-2">{key}:</b>
              {phone[key]}
            </li>
          )
      )}
      <li>
        <b class="mr-2">Screen Resolution:</b>
        {phone.displayResolution}
      </li>
      <li>
        <b>Cameras:</b>
        <ul class="ml-4">
          <li>
            <b class="mr-2">Primary:</b>
            {phone.primaryCamera}
          </li>
          <li>
            <b class="mr-2">Secondary:</b>
            {phone.secondaryCmera}
          </li>
        </ul>
      </li>
    </ul>
  </article>
);

export default Description;
